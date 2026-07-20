import {
  EMPTY_STRING,
  JSON_CONFIG,
  DISABLED,
  CLEAR_CACHE_ENABLED,
  CORS_ENABLED_STORAGE_KEY,
  PROXY_STORAGE_KEY,
  CORS_STORAGE,
  ACTIVE_KEYS,
  USE_CHROME_STORAGE_SYNC_FN,
  GREY_ICON_PATH,
  BLUE_ICON_PATH,
  ALL_URLS,
  MILLISECONDS_PER_WEEK,
  MCP_ENABLED_STORAGE_KEY,
} from "./constants";
import { BadgeText, Enabled, IconBackgroundColor } from "./enums";
import { ChromeStorageManager, getChecked } from "./chrome-storage";
import {
  updateDeclarativeNetRequestRules,
  isDeclarativeNetRequestAvailable,
} from "./declarative-net-request";
import { setMcpBridgeEnabled } from "./mcp-bridge";

const csmInstance = new ChromeStorageManager({
  useChromeStorageSyncFn: USE_CHROME_STORAGE_SYNC_FN,
});

// 运行时状态（此前借助 forward 单例保存，现直接用模块级变量）
let parseError: boolean = false;
let corsEnabled: boolean = true;
let clearCacheEnabled: boolean = true;
let clearRunning: boolean = false;
// DISABLED 存储位：值为 Enabled.YES 表示开关处于开启状态
let switchState: Enabled = Enabled.YES;
let jsonActiveKeys: string[] = ["0"];
let conf: StorageJSON = {
  0: {
    [PROXY_STORAGE_KEY]: [],
    [CORS_STORAGE]: [],
  },
};
// 当前生效的合并配置，仅用于计算 badge 数量
let activeConfig: IActiveConfig = {
  [PROXY_STORAGE_KEY]: [],
  [CORS_STORAGE]: [],
};

interface IActiveConfig {
  [PROXY_STORAGE_KEY]?: any[];
  [CORS_STORAGE]?: string[];
}

interface SingleConfig {
  [PROXY_STORAGE_KEY]: Array<[]>;
  [CORS_STORAGE]: string[];
}

interface StorageJSON {
  0: SingleConfig;
  [key: string]: any;
}

function isEnabled(): boolean {
  return switchState !== Enabled.NO;
}

function getActiveConfig(config: StorageJSON): IActiveConfig {
  const activeKeys = [...jsonActiveKeys];
  const json = config["0"];
  activeKeys.forEach((key: string) => {
    if (config[key] && key !== "0") {
      if (config[key][PROXY_STORAGE_KEY]) {
        if (!json[PROXY_STORAGE_KEY]) {
          json[PROXY_STORAGE_KEY] = [];
        }
        json[PROXY_STORAGE_KEY] = [
          ...json[PROXY_STORAGE_KEY],
          ...config[key][PROXY_STORAGE_KEY],
        ];
      }

      if (config[key][CORS_STORAGE]) {
        if (!json[CORS_STORAGE]) {
          json[CORS_STORAGE] = [];
        }
        json[CORS_STORAGE] = [
          ...json[CORS_STORAGE],
          ...config[key][CORS_STORAGE],
        ];
      }
    }
  });
  return json;
}

/**
 * 应用规则并根据结果刷新错误状态。
 */
async function applyRules(): Promise<void> {
  if (!isDeclarativeNetRequestAvailable()) {
    return;
  }
  const success = await updateDeclarativeNetRequestRules(
    activeConfig,
    !isEnabled(),
    corsEnabled
  );
  parseError = !success;
  setIcon();
}

// 初始化：读取配置并计算生效配置
csmInstance.get(
  {
    [JSON_CONFIG]: {
      0: {
        [PROXY_STORAGE_KEY]: [],
        [CORS_STORAGE]: [],
      },
    },
    [ACTIVE_KEYS]: ["0"],
  },
  (result: any) => {
    jsonActiveKeys = result[ACTIVE_KEYS] || ["0"];
    if (result && result[JSON_CONFIG]) {
      conf = result[JSON_CONFIG];
      activeConfig = getActiveConfig(conf);
    } else {
      activeConfig = {
        [PROXY_STORAGE_KEY]: [],
        [CORS_STORAGE]: [],
      };
      parseError = false;
    }
  }
);

// 初始化：读取开关与选项状态
csmInstance.get(
  {
    [DISABLED]: Enabled.YES,
    [CLEAR_CACHE_ENABLED]: Enabled.YES,
    [CORS_ENABLED_STORAGE_KEY]: Enabled.YES,
  },
  (result: any) => {
    switchState = result[DISABLED];
    clearCacheEnabled = result[CLEAR_CACHE_ENABLED] === Enabled.YES;
    corsEnabled = result[CORS_ENABLED_STORAGE_KEY] === Enabled.YES;
    setIcon();
  }
);

chrome.storage.onChanged.addListener((changes) => {
  if (changes[ACTIVE_KEYS]) {
    jsonActiveKeys = changes[ACTIVE_KEYS].newValue as string[];
  }

  if (changes[DISABLED]) {
    switchState = changes[DISABLED].newValue as Enabled;
  }

  if (changes[CLEAR_CACHE_ENABLED]) {
    clearCacheEnabled = changes[CLEAR_CACHE_ENABLED].newValue === Enabled.YES;
  }

  if (changes[CORS_ENABLED_STORAGE_KEY]) {
    corsEnabled = changes[CORS_ENABLED_STORAGE_KEY].newValue === Enabled.YES;
  }

  if (changes[MCP_ENABLED_STORAGE_KEY]) {
    setMcpBridgeEnabled(changes[MCP_ENABLED_STORAGE_KEY].newValue === Enabled.YES);
  }

  csmInstance.get(
    {
      [JSON_CONFIG]: {
        0: {
          [PROXY_STORAGE_KEY]: [],
          [CORS_STORAGE]: [],
        },
      },
    },
    (result: any) => {
      if (result && result[JSON_CONFIG]) {
        conf = result[JSON_CONFIG];
        activeConfig = getActiveConfig(conf);
      }
      applyRules();
    }
  );
});

csmInstance.get(
  { [MCP_ENABLED_STORAGE_KEY]: Enabled.YES },
  (result: any) => {
    setMcpBridgeEnabled(result[MCP_ENABLED_STORAGE_KEY] === Enabled.YES);
  }
);

// 启动时应用一次规则
csmInstance.get(
  {
    [JSON_CONFIG]: {
      0: {
        [PROXY_STORAGE_KEY]: [],
        [CORS_STORAGE]: [],
      },
    },
  },
  async (result: any) => {
    if (result && result[JSON_CONFIG]) {
      conf = result[JSON_CONFIG];
      activeConfig = getActiveConfig(conf);
    }
    switchState = (await getChecked()) as Enabled;
    applyRules();
  }
);

function setBadgeAndBackgroundColor(
  text: string | number,
  color: string
): void {
  // 兼容 Manifest V3: browserAction -> action
  const action = (chrome as any).action || (chrome as any).browserAction;
  action.setBadgeText({
    text: EMPTY_STRING + text,
  });
  action.setBadgeBackgroundColor({
    color,
  });
}

function setActionIcon(enabled: boolean): void {
  // 兼容 Manifest V3: browserAction -> action
  const action = (chrome as any).action || (chrome as any).browserAction;
  try {
    action.setIcon({ path: enabled ? BLUE_ICON_PATH : GREY_ICON_PATH });
  } catch {
    // 忽略设置图标失败
  }
}

function setIcon(): void {
  const enabled = isEnabled();
  // 开启时蓝色图标，关闭时灰色图标
  setActionIcon(enabled && !parseError);

  if (parseError) {
    setBadgeAndBackgroundColor(BadgeText.ERROR, IconBackgroundColor.ERROR);
    return;
  }

  if (enabled) {
    setBadgeAndBackgroundColor(
      activeConfig?.[PROXY_STORAGE_KEY]?.length || 0,
      IconBackgroundColor.ON
    );
  } else {
    setBadgeAndBackgroundColor(BadgeText.OFF, IconBackgroundColor.OFF);
  }
}

// ---------------------------------------------------------------------------
// 编辑器 URL 自动补全支持
//
// 通过非阻塞的 webRequest 观察器收集近期访问过的 js/css/json(p) URL，
// 供 popup 编辑器的自动补全使用（响应 { action: "getUrls" } 消息）。
// 该缓存仅存于内存中，Service Worker 重启后自动重建。
// ---------------------------------------------------------------------------
const MAX_CACHED_URLS = 200;
const RESOURCE_URL_REG = /https?:\/\/.*\.(js|css|json|jsonp)/i;
const recentUrls: string[] = [];

function recordUrl(url: string): void {
  if (!url || !RESOURCE_URL_REG.test(url) || recentUrls.indexOf(url) > -1) {
    return;
  }
  recentUrls.push(url);
  if (recentUrls.length > MAX_CACHED_URLS) {
    recentUrls.shift();
  }
}

// 与 V2 行为一致：总开关开启且「启用清除缓存」打开时，随请求触发
// 清除一周内的 HTTP 缓存；clearRunning 防止上一次清除未结束时并发重入。
function clearCache(): void {
  if (clearRunning) {
    return;
  }
  clearRunning = true;
  const oneWeekAgo = Date.now() - MILLISECONDS_PER_WEEK;
  chrome.browsingData.removeCache({ since: oneWeekAgo }, () => {
    clearRunning = false;
  });
}

try {
  const webRequest = (chrome as any).webRequest;
  if (webRequest && webRequest.onBeforeRequest) {
    webRequest.onBeforeRequest.addListener(
      (details: { url: string }) => {
        recordUrl(details.url);
        if (isEnabled() && clearCacheEnabled) {
          clearCache();
        }
      },
      { urls: [ALL_URLS] }
    );
  }
} catch {
  // webRequest 不可用时静默降级，自动补全仅少了历史 URL 建议
}

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request && request.action === "getUrls") {
    sendResponse({ urls: recentUrls.slice() });
  }
  return true;
});

// check when extension is loaded
setIcon();
