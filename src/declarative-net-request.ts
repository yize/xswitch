import { REG } from "./constants";

interface IForwardConfig {
  proxy?: string[][];
  cors?: string[];
}

/**
 * 判断一条规则的 from 是否是正则规则（而非纯字符串匹配）。
 * 与 forward.matchUrl 保持一致：含有 \ [ ] ( ) * $ ^ 之一即视为正则。
 */
function isRegexRule(pattern: string): boolean {
  return REG.FORWARD.test(pattern);
}

/**
 * 转义 RE2 正则元字符，使字符串按字面量匹配。
 */
function escapeRe2Literal(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * 校验正则是否可被引擎编译。用 JS RegExp 作为近似校验，
 * 目的是提前过滤掉明显非法的规则，避免整批规则被 DNR 拒绝。
 */
function isValidRegex(pattern: string): boolean {
  try {
    new RegExp(pattern);
    return true;
  } catch {
    return false;
  }
}

/**
 * 将原始模式转换为 RE2 兼容的 regexFilter。
 *
 * - 纯字符串规则：整体转义为字面量，保持"子串匹配"语义。
 * - 正则规则：按 JS 正则原样传递，仅把 XSwitch 约定的 `??`
 *   组合加载标记转义成字面量 `\?\?`（与旧 forward 逻辑一致）。
 */
function convertToRe2Pattern(pattern: string): string {
  if (isRegexRule(pattern)) {
    return pattern.replace(/\?\?/g, "\\?\\?");
  }
  return escapeRe2Literal(pattern);
}

/**
 * 将目标 URL 转换为 RE2 兼容的替换模式。
 * DNR 的 regexSubstitution 用 \1..\9 引用捕获组，且 \ 需要转义。
 */
function convertToRe2Substitution(targetUrl: string): string {
  return targetUrl
    .replace(/\\/g, "\\\\") // 先转义字面量反斜杠
    .replace(/\$(\d)/g, "\\$1"); // 再把 $1..$9 转成 \1..\9
}

/**
 * 将代理规则转换为 declarativeNetRequest 规则。
 * 非法正则的规则会被跳过（而不是导致整批规则失效）。
 */
export function generateProxyRules(
  config: IForwardConfig
): chrome.declarativeNetRequest.Rule[] {
  const rules: chrome.declarativeNetRequest.Rule[] = [];
  let ruleId = 1;

  if (config.proxy && config.proxy.length > 0) {
    config.proxy.forEach((rule) => {
      // rule[1] 必须是字符串才是一条有效的转发规则
      if (!rule || !rule[0] || typeof rule[1] !== "string") {
        return;
      }

      const regexFilter = convertToRe2Pattern(rule[0]);
      const regexSubstitution = convertToRe2Substitution(rule[1]);

      if (!isValidRegex(regexFilter)) {
        console.warn(`[XSwitch] Skip invalid proxy rule: ${rule[0]}`);
        return;
      }

      rules.push({
        id: ruleId++,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution,
          },
        },
        condition: {
          regexFilter,
          resourceTypes: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "font",
            "object",
            "xmlhttprequest",
            "ping",
            "csp_report",
            "media",
            "websocket",
            "other",
          ],
        },
      } as chrome.declarativeNetRequest.Rule);
    });
  }

  return rules;
}

/**
 * 将 CORS 规则转换为 declarativeNetRequest 规则
 */
export function generateCorsRules(
  config: IForwardConfig
): chrome.declarativeNetRequest.Rule[] {
  const rules: chrome.declarativeNetRequest.Rule[] = [];
  let ruleId = 1000; // 使用不同的 ID 范围

  if (config.cors && config.cors.length > 0) {
    config.cors.forEach((domain) => {
      if (!domain) {
        return;
      }
      // 添加 CORS 响应头规则
      rules.push({
        id: ruleId++,
        priority: 1,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            {
              header: "access-control-allow-origin",
              operation: "set",
              value: "*",
            },
            {
              header: "access-control-allow-credentials",
              operation: "set",
              value: "true",
            },
            {
              header: "access-control-allow-methods",
              operation: "set",
              value: "*",
            },
            {
              header: "access-control-allow-headers",
              operation: "set",
              value:
                "Content-Type, access-control-allow-headers, Authorization, X-Requested-With, X-Referer",
            },
          ],
        },
        condition: {
          urlFilter: `||${domain}`,
          resourceTypes: ["xmlhttprequest", "websocket"],
        },
      } as chrome.declarativeNetRequest.Rule);
    });
  }

  return rules;
}

/**
 * 清除现有规则（原子操作，走同一串行队列）
 */
export function removeDeclarativeNetRequestRules(): Promise<boolean> {
  return enqueueUpdate(async () => {
    const removeRuleIds = await getAllRuleIds();
    if (removeRuleIds.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds });
    }
  });
}

// 串行化所有动态规则更新，避免 init 与 storage.onChanged 并发触发时
// 出现「先后两次 remove/add 交错，导致 id 冲突」的问题。
let updateQueue: Promise<unknown> = Promise.resolve();

function enqueueUpdate(task: () => Promise<void>): Promise<boolean> {
  const run = async (): Promise<boolean> => {
    try {
      await task();
      return true;
    } catch (error) {
      console.error(
        "[XSwitch] Failed to update declarativeNetRequest rules:",
        error
      );
      return false;
    }
  };
  const result = updateQueue.then(run, run);
  // 无论成功失败都让队列继续，避免链被 reject 卡死
  updateQueue = result.catch(() => undefined);
  return result;
}

/**
 * 更新 declarativeNetRequest 规则。
 * 删除旧规则与添加新规则合并为一次原子 updateDynamicRules 调用，
 * 并通过串行队列保证多次更新不会并发冲突。
 * @returns 是否成功应用规则（失败时可用于展示错误标记）
 */
export function updateDeclarativeNetRequestRules(
  config: IForwardConfig,
  disabled: boolean,
  corsEnabled: boolean = true
): Promise<boolean> {
  return enqueueUpdate(async () => {
    const removeRuleIds = await getAllRuleIds();

    const addRules = disabled
      ? []
      : [
          ...generateProxyRules(config),
          ...(corsEnabled ? generateCorsRules(config) : []),
        ];

    // Chrome 会先应用 removeRuleIds 再应用 addRules，单次调用即可避免 id 冲突
    if (removeRuleIds.length > 0 || addRules.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds,
        addRules,
      });
    }
  });
}

/**
 * 获取所有动态规则 ID
 */
async function getAllRuleIds(): Promise<number[]> {
  try {
    const rules = await chrome.declarativeNetRequest.getDynamicRules();
    return rules.map((rule) => rule.id);
  } catch (error) {
    console.error("[XSwitch] Failed to get dynamic rules:", error);
    return [];
  }
}

/**
 * 检查 declarativeNetRequest 是否可用
 */
export function isDeclarativeNetRequestAvailable(): boolean {
  return (
    typeof chrome !== "undefined" &&
    typeof chrome.declarativeNetRequest !== "undefined"
  );
}
