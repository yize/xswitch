import { ALL_URLS, PROXY_STORAGE_KEY, CORS_STORAGE } from "./constants";
import { Enabled, UrlType } from "./enums";

interface IForwardConfig {
  proxy?: string[][];
  cors?: string[];
}

/**
 * 将代理规则转换为 declarativeNetRequest 规则
 */
export function generateProxyRules(
  config: IForwardConfig
): chrome.declarativeNetRequest.Rule[] {
  const rules: chrome.declarativeNetRequest.Rule[] = [];
  let ruleId = 1;

  if (config.proxy && config.proxy.length > 0) {
    config.proxy.forEach((rule, index) => {
      if (rule && rule[0] && rule[1]) {
        const fromPattern = rule[0];
        const toUrl = rule[1];

        // 转换正则表达式为 RE2 兼容格式
        const regexFilter = convertToRe2Pattern(fromPattern);
        const regexSubstitution = convertToRe2Substitution(toUrl);

        // 创建重定向规则
        rules.push({
          id: ruleId++,
          priority: 1,
          action: {
            type: "redirect",
            redirect: {
              regexSubstitution: regexSubstitution,
            },
          },
          condition: {
            regexFilter: regexFilter,
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
        });
      }
    });
  }

  return rules;
}

/**
 * 将原始模式转换为 RE2 兼容的正则表达式
 */
function convertToRe2Pattern(pattern: string): string {
  let result = pattern;

  // 转义特殊字符
  result = result
    .replace(/\./g, "\\.") // 转义点号
    .replace(/-/g, "\\-");
  // .replace(/\(/g, "\\(") // 转义左括号
  // .replace(/\)/g, "\\)") // 转义右括号
  // .replace(/\[/g, "\\[") // 转义左方括号
  // .replace(/\]/g, "\\]") // 转义右方括号
  // .replace(/\?/g, "\\?") // 转义问号
  // .replace(/\*/g, "\\*") // 转义星号
  // .replace(/\+/g, "\\+") // 转义加号
  // .replace(/\|/g, "\\|") // 转义竖线
  // .replace(/\^/g, "\\^") // 转义脱字符
  // .replace(/\$/g, "\\$") // 转义美元符
  // .replace(/\//g, "\\/") // 转义斜杠
  // .replace(/\\/g, "\\\\"); // 转义反斜杠

  // 恢复捕获组 (.*)
  result = result.replace(/\(\\\.\*\)/g, "(.*)");

  return result;
}

/**
 * 将目标 URL 转换为 RE2 兼容的替换模式
 */
function convertToRe2Substitution(targetUrl: string): string {
  // RE2 使用 $1, $2 等作为捕获组引用
  // return targetUrl
  //   .replace(/\$(\d+)/g, "$$$1") // 将 $1, $2 转换为 $$1, $$2
  //   .replace(/\\/g, "\\\\"); // 转义反斜杠
  return targetUrl.replace(/\$(\d+)/g, "\\$1"); // 将 $1, $2 转换为 $$1, $$2
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
      });
    });
  }

  return rules;
}
/**
 * 清除现有规则
 */
export async function removeDeclarativeNetRequestRules(): Promise<void> {
  try {
    const ruleIds = await getAllRuleIds();
    if (ruleIds.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: ruleIds,
      });
    }
  } catch (error) {}
}

/**
 * 更新 declarativeNetRequest 规则
 */
export async function updateDeclarativeNetRequestRules(
  config: IForwardConfig,
  disabled: boolean
): Promise<void> {
  try {
    await removeDeclarativeNetRequestRules();

    if (disabled) {
      return;
    }

    // 生成新规则
    const proxyRules = generateProxyRules(config);
    const corsRules = generateCorsRules(config);
    const allRules = [...proxyRules, ...corsRules];
    console.log("allRules---", allRules);
    // 添加新规则
    if (allRules.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: allRules,
      });
    }

    console.log(
      `Updated declarativeNetRequest rules: ${allRules.length} rules`
    );
  } catch (error) {
    console.error("Failed to update declarativeNetRequest rules:", error);
  }
}

/**
 * 获取所有动态规则 ID
 */
async function getAllRuleIds(): Promise<number[]> {
  try {
    const rules = await (chrome as any).declarativeNetRequest.getDynamicRules();
    return rules.map((rule: any) => rule.id);
  } catch (error) {
    console.error("Failed to get dynamic rules:", error);
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
