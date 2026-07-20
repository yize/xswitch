import {
  JSONC_CONFIG,
  JSON_CONFIG,
  DISABLED,
  CLEAR_CACHE_ENABLED,
  CORS_ENABLED_STORAGE_KEY,
  TAB_LIST,
  EDITING_CONFIG_KEY,
  ACTIVE_KEYS,
  USE_CHROME_STORAGE_SYNC_FN,
  SYNC_STORAGE_DATA_HAS_BEEN_MIGARATED_TO_LOCAL,
  THEME_MODE_STORAGE_KEY,
  MCP_ENABLED_STORAGE_KEY,
  DEFAULT_DATA,
} from "./constants";
import { JSONC2JSON, JSON_Parse } from "./utils";
import { Enabled, ThemeMode } from "./enums";

interface ConfigStorage {
  [JSONC_CONFIG]: object | string;
}
interface OptionsStorage {
  [CLEAR_CACHE_ENABLED]: string;
  [CORS_ENABLED_STORAGE_KEY]: string;
  [MCP_ENABLED_STORAGE_KEY]: string;
}

interface ChromeStorageManagerProps {
  useChromeStorageSyncFn: boolean;
}
export class ChromeStorageManager {
  private storageFn: chrome.storage.StorageArea;

  constructor(props: ChromeStorageManagerProps) {
    /**
     **  More details: https://developer.chrome.com/extensions/storage
     **
     **  Property limit between storage.sync and storage.local in QUOTA_BYTES:
     **  QUOTA_BYTES_PER_ITEM prop in storage.sync is 8,192 and
     **  QUOTA_BYTES prop in storage.sync is 102,400,
     **  which indicates the maximum total amount (in bytes) of data that can be stored in sync storage.sync.
     **  Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
     **
     **  QUOTA_BYTES prop in storage.local is 5,242,880,
     **  which indicates the maximum amount (in bytes) of data that can be stored in local storage,
     **  as measured by the JSON stringification of every value plus every key's length.
     */
    this.storageFn = props.useChromeStorageSyncFn
      ? chrome.storage.sync
      : chrome.storage.local;
  }

  get(keyOrObj: any, callback?: (result: any) => void): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storageFn.get(keyOrObj, (result: any) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
          if (callback) callback(result);
        }
      });
    });
  }

  set(obj: any, callback?: (result: any) => void): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storageFn.set(obj, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(obj);
          if (callback) callback(obj);
        }
      });
    });
  }
}

const csmInstance = new ChromeStorageManager({
  useChromeStorageSyncFn: USE_CHROME_STORAGE_SYNC_FN, // we can also make this option configurable
});

/**
 * 兼容 chrome.storage.sync 历史数据的逻辑
 */
function checkAndSyncHistorialSyncStorageDataToLocal() {
  const historyStorageKeyOrObj = {
    [JSONC_CONFIG]: {
      0: "",
    },
    [JSON_CONFIG]: {},
    [TAB_LIST]: [
      {
        id: "0",
        name: "Current",
        active: true,
      },
    ],
    [ACTIVE_KEYS]: ["0"],
  };
  const migaratedFlag = {
    [SYNC_STORAGE_DATA_HAS_BEEN_MIGARATED_TO_LOCAL]: {
      migarated: false,
    },
  };

  csmInstance.get(migaratedFlag, (result: any) => {
    if (!result[SYNC_STORAGE_DATA_HAS_BEEN_MIGARATED_TO_LOCAL].migarated) {
      chrome.storage.sync.get(historyStorageKeyOrObj, (hisData: any) => {
        const stash: any = {
          [JSONC_CONFIG]: {},
          [JSON_CONFIG]: {},
        };
        hisData[TAB_LIST].forEach((tab: any) => {
          stash[JSONC_CONFIG][tab.id] = hisData[JSONC_CONFIG][tab.id];
          stash[JSON_CONFIG][tab.id] = hisData[JSON_CONFIG][tab.id];
        });

        csmInstance.set({
          [SYNC_STORAGE_DATA_HAS_BEEN_MIGARATED_TO_LOCAL]: {
            migarated: true,
          },
          ...hisData,
          ...stash,
        });
      });
    }
  });
}

checkAndSyncHistorialSyncStorageDataToLocal();

export function getConfig(editingConfigKey: string): Promise<ConfigStorage> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [JSONC_CONFIG]: {
          0: "",
        },
      },
      (result: any) => {
        if (typeof result[JSONC_CONFIG] === "string") {
          return resolve({
            [JSONC_CONFIG]: result[JSONC_CONFIG],
          });
        }
        resolve({
          [JSONC_CONFIG]: result[JSONC_CONFIG][editingConfigKey],
        });
      }
    );
  });
}

export function getActiveKeys(): Promise<any> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [ACTIVE_KEYS]: ["0"],
      },
      (result: any) => {
        resolve(result[ACTIVE_KEYS]);
      }
    );
  });
}

export function setActiveKeys(keys?: string[]): Promise<object> {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        [ACTIVE_KEYS]: keys,
      },
      resolve
    );
  });
}

export function getConfigItems(): Promise<any> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [TAB_LIST]: [
          {
            id: "0",
            name: "Current",
            active: true,
          },
        ],
      },
      (result: any) => {
        resolve(result[TAB_LIST]);
      }
    );
  });
}

export function setConfigItems(items?: any): Promise<object> {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        [TAB_LIST]: items.slice(),
        [ACTIVE_KEYS]: items
          .filter((item: any) => item.active)
          .map((item: any) => item.id),
      },
      resolve
    );
  });
}

export function getEditingConfigKey(): Promise<string> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [EDITING_CONFIG_KEY]: "0",
      },
      (result: any) => {
        resolve(result[EDITING_CONFIG_KEY]);
      }
    );
  });
}

export function setEditingConfigKey(key: string): Promise<object> {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        [EDITING_CONFIG_KEY]: key,
      },
      resolve
    );
  });
}

export function saveConfig(
  jsonc: string,
  editingConfigKey: string
): Promise<any> {
  const json = JSONC2JSON(jsonc);

  return new Promise((resolve) => {
    csmInstance.get(
      {
        [JSONC_CONFIG]: {},
        [JSON_CONFIG]: {},
      },
      (result: any) => {
        // migrate
        if (typeof result[JSONC_CONFIG] === "string") {
          result[JSONC_CONFIG] = {};
          result[JSON_CONFIG] = {};
        }

        result[JSONC_CONFIG][editingConfigKey] = jsonc;

        JSON_Parse(json, (error, parsedJSON) => {
          if (!error) {
            result[JSON_CONFIG][editingConfigKey] = parsedJSON;
            return;
          }
          result[JSON_CONFIG][editingConfigKey] = "";
        });

        csmInstance.set(result, resolve);
      }
    );
  });
}

export function getChecked(): Promise<string> {
  return new Promise((resolve) => {
    csmInstance.get(DISABLED, (result: any) => {
      resolve(result[DISABLED]);
    });
  });
}

export function setChecked(checked?: boolean): Promise<object> {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        [DISABLED]: checked ? Enabled.YES : Enabled.NO,
      },
      resolve
    );
  });
}

export function getOptions(): Promise<OptionsStorage> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [CLEAR_CACHE_ENABLED]: Enabled.YES,
        [CORS_ENABLED_STORAGE_KEY]: Enabled.YES,
        [MCP_ENABLED_STORAGE_KEY]: Enabled.YES,
      },
      (result: any) => {
        resolve({
          [CLEAR_CACHE_ENABLED]: result.clearCacheEnabled,
          [CORS_ENABLED_STORAGE_KEY]: result.corsEnabled,
          [MCP_ENABLED_STORAGE_KEY]: result.mcpEnabled,
        });
      }
    );
  });
}

export function setOptions(options: any): Promise<OptionsStorage> {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        clearCacheEnabled: options.clearCacheEnabled ? Enabled.YES : Enabled.NO,
        corsEnabled: options.corsEnabled ? Enabled.YES : Enabled.NO,
        mcpEnabled: options.mcpEnabled ? Enabled.YES : Enabled.NO,
      },
      resolve as any
    );
  });
}

export function openLink(url: string, isInner: boolean = false): void {
  chrome.tabs.create({
    url: isInner ? chrome.runtime.getURL(url) : url,
  });
}

export function getThemeMode(): Promise<ThemeMode> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [THEME_MODE_STORAGE_KEY]: ThemeMode.AUTO,
      },
      (result: any) => {
        resolve(result[THEME_MODE_STORAGE_KEY] as ThemeMode);
      }
    );
  });
}

export function setThemeMode(mode: ThemeMode): Promise<object> {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        [THEME_MODE_STORAGE_KEY]: mode,
      },
      resolve as any
    );
  });
}

/**
 * 规则导入/导出数据格式（带版本号，便于日后兼容演进）。
 * items 对应 TAB_LIST 的规则分组，rules 是按分组 id 存放的 JSONC 文本。
 */
export interface RuleExport {
  type: "xswitch-rules";
  version: number;
  exportedAt: string;
  items: Array<{ id: string; name: string; active: boolean }>;
  rules: Record<string, string>;
}

const RULE_EXPORT_TYPE = "xswitch-rules";
const RULE_EXPORT_VERSION = 1;

/**
 * 把 JSONC 文本安全解析成 JSON 对象；解析失败返回空字符串，
 * 与 saveConfig 里对非法配置的处理保持一致。
 */
function safeParseJsonc(jsonc: string): object | string {
  let parsed: object | string = "";
  JSON_Parse(JSONC2JSON(jsonc || ""), (error, json) => {
    if (!error && json) {
      parsed = json;
    }
  });
  return parsed;
}

/**
 * 校验传入对象是否为合法的 XSwitch 规则导出文件。
 */
export function isValidRuleExport(data: any): data is RuleExport {
  return (
    !!data &&
    data.type === RULE_EXPORT_TYPE &&
    Array.isArray(data.items) &&
    data.items.every(
      (it: any) =>
        it && typeof it.id === "string" && typeof it.name === "string"
    ) &&
    typeof data.rules === "object" &&
    data.rules !== null
  );
}

/**
 * 汇总当前全部规则分组为可分享的导出对象。
 */
export function exportRules(): Promise<RuleExport> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [TAB_LIST]: [{ id: "0", name: "Current", active: true }],
        [JSONC_CONFIG]: {},
      },
      (result: any) => {
        const items = (result[TAB_LIST] || []).map((it: any) => ({
          id: it.id,
          name: it.name,
          active: !!it.active,
        }));
        const rawJsonc =
          typeof result[JSONC_CONFIG] === "string" ? {} : result[JSONC_CONFIG];
        const rules: Record<string, string> = {};
        items.forEach((it: { id: string }) => {
          rules[it.id] = rawJsonc[it.id] || "";
        });
        resolve({
          type: RULE_EXPORT_TYPE,
          version: RULE_EXPORT_VERSION,
          exportedAt: new Date().toISOString(),
          items,
          rules,
        });
      }
    );
  });
}

/**
 * 导入规则。
 * - overwrite：用导入内容替换全部分组（并保证存在默认分组 "0"）。
 * - merge：把导入分组以全新 id 追加到现有分组之后（默认不激活，避免意外改变生效规则）。
 * JSON_CONFIG 均由 JSONC 重新解析生成，保证与编辑器文本一致。
 */
export function importRules(
  payload: RuleExport,
  mode: "merge" | "overwrite"
): Promise<void> {
  return new Promise((resolve) => {
    csmInstance.get(
      {
        [TAB_LIST]: [{ id: "0", name: "Current", active: true }],
        [JSONC_CONFIG]: {},
        [JSON_CONFIG]: {},
      },
      (result: any) => {
        const curItems = result[TAB_LIST] || [];
        const curJsonc =
          typeof result[JSONC_CONFIG] === "string" ? {} : result[JSONC_CONFIG];
        const curJson =
          typeof result[JSON_CONFIG] === "string" ? {} : result[JSON_CONFIG];

        let items: Array<{ id: string; name: string; active: boolean }>;
        const jsonc: Record<string, string> = {};
        const json: Record<string, object | string> = {};

        if (mode === "overwrite") {
          items = payload.items.map((it) => ({
            id: it.id,
            name: it.name,
            active: !!it.active,
          }));
          items.forEach((it) => {
            const content = payload.rules[it.id] || "";
            jsonc[it.id] = content;
            json[it.id] = safeParseJsonc(content);
          });
          // 应用假定始终存在 id 为 "0" 的默认分组，缺失时补上。
          if (!items.some((it) => it.id === "0")) {
            items.unshift({ id: "0", name: "Current", active: true });
            jsonc["0"] = DEFAULT_DATA;
            json["0"] = safeParseJsonc(DEFAULT_DATA);
          }
        } else {
          items = curItems.slice();
          Object.assign(jsonc, curJsonc);
          Object.assign(json, curJson);
          const base = Date.now();
          payload.items.forEach((it, idx) => {
            const newId = String(base + idx);
            items.push({ id: newId, name: it.name, active: false });
            const content = payload.rules[it.id] || "";
            jsonc[newId] = content;
            json[newId] = safeParseJsonc(content);
          });
        }

        const activeKeys = items
          .filter((it) => it.active)
          .map((it) => it.id);

        csmInstance.set(
          {
            [TAB_LIST]: items,
            [ACTIVE_KEYS]: activeKeys,
            [JSONC_CONFIG]: jsonc,
            [JSON_CONFIG]: json,
          },
          () => resolve()
        );
      }
    );
  });
}

export function removeUnusedItems() {
  csmInstance.get(
    {
      [JSONC_CONFIG]: {},
      [JSON_CONFIG]: {},
      [TAB_LIST]: [
        {
          id: "0",
          name: "Current",
          active: true,
        },
      ],
    },
    (result: any) => {
      const stash: any = {
        [JSONC_CONFIG]: {},
        [JSON_CONFIG]: {},
      };
      result[TAB_LIST].forEach((tab: any) => {
        stash[JSONC_CONFIG][tab.id] = result[JSONC_CONFIG][tab.id];
        stash[JSON_CONFIG][tab.id] = result[JSON_CONFIG][tab.id];
      });
      csmInstance.set(stash, () => {});
    }
  );
}
