import {
  JSONC_CONFIG,
  JSON_CONFIG,
  DISABLED,
  CLEAR_CACHE_ENABLED,
  CORS_ENABLED_STORAGE_KEY,
  TAB_LIST,
  EDITING_CONFIG_KEY,
  ACTIVE_KEYS,
} from './constants';
import { JSONC2JSON, JSON_Parse } from './utils';
import { Enabled } from './enums';

interface ConfigStorage {
  [JSONC_CONFIG]: object;
}
interface OptionsStorage {
  [CLEAR_CACHE_ENABLED]: string;
  [CORS_ENABLED_STORAGE_KEY]: string;
}

export function getConfig(editingConfigKey: string): Promise<ConfigStorage> {
  return new Promise((resolve) => {
    if (process.env.NODE_ENV !== 'production') {
      return resolve({
        [JSONC_CONFIG]: {
          0: '',
        },
      });
    }
    window.chrome.storage.sync.get({
      [JSONC_CONFIG]: {
        0: '',
      },
    }, (result: any) => {
      if (typeof result[JSONC_CONFIG] === 'string') {
        return resolve(result[JSONC_CONFIG]);
      }
      resolve(result[JSONC_CONFIG][editingConfigKey]);
    });
  });
}

export function getActiveKeys(): Promise<any> {
  return new Promise((resolve) => {
    if (process.env.NODE_ENV !== 'production') {
      return resolve({
        [ACTIVE_KEYS]: ['0'],
      });
    }
    window.chrome.storage.sync.get(
      {
        [ACTIVE_KEYS]: ['0'],
      }, (result: any) => {
        resolve(result[ACTIVE_KEYS]);
      });
  });
}

export function setActiveKeys(keys?: string[]): Promise<object> | void {
  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve) => {
      window.chrome.storage.sync.set(
        {
          [ACTIVE_KEYS]: keys,
        },
        resolve
      );
    });
  }
}

export function getConfigItems(): Promise<any> {
  return new Promise((resolve) => {
    if (process.env.NODE_ENV !== 'production') {
      return resolve({
        [TAB_LIST]: [{
          id: '0',
          name: 'Current',
          active: true,
        }],
      });
    }
    window.chrome.storage.sync.get(
      {
        [TAB_LIST]: [{
          id: '0',
          name: 'Current',
          active: true,
        }],
      }, (result: any) => {
        resolve(result[TAB_LIST]);
      });
  });
}

export function setConfigItems(items?: any): Promise<object> | void {
  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve) => {
      window.chrome.storage.sync.set(
        {
          [TAB_LIST]: items,
          [ACTIVE_KEYS]: items.map((item: any) => {
            if (item.active) {
              return item.id;
            }
          }),
        },
        resolve
      );
    });
  }
}

export function getEditingConfigKey(): Promise<string> {
  return new Promise((resolve) => {
    if (process.env.NODE_ENV !== 'production') {
      return resolve('0');
    }
    window.chrome.storage.sync.get(
      {
        [EDITING_CONFIG_KEY]: '0',
      }, (result) => {
        resolve(result[EDITING_CONFIG_KEY]);
      });
  });
}

export function setEditingConfigKey(key: string): Promise<object> | void {
  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve) => {
      window.chrome.storage.sync.set(
        {
          [EDITING_CONFIG_KEY]: key,
        },
        resolve
      );
    });
  }
}

export function saveConfig(jsonc: string, editingConfigKey: string): Promise<any> | void {
  const json = JSONC2JSON(jsonc);

  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve) => {
      window.chrome.storage.sync.get({
        [JSONC_CONFIG]: {},
        [JSON_CONFIG]: {},
      }, (result) => {
        // migrate
        if (typeof result[JSONC_CONFIG] === 'string') {
          result[JSONC_CONFIG] = {};
          result[JSON_CONFIG] = {};
        }

        result[JSONC_CONFIG][editingConfigKey] = jsonc;

        JSON_Parse(json, (error, parsedJSON) => {
          if (!error) {
            result[JSON_CONFIG][editingConfigKey] = parsedJSON;
            return;
          }
          result[JSON_CONFIG][editingConfigKey] = '';
        });

        window.chrome.storage.sync.set(
          result,
          resolve
        );
      });
    });
  }
}

export function getChecked(): Promise<string> {
  return new Promise((resolve) => {
    if (process.env.NODE_ENV !== 'production') {
      return resolve(Enabled.YES);
    }
    window.chrome.storage.sync.get(DISABLED, (result: any) => {
      resolve(result[DISABLED]);
    });
  });
}

export function setChecked(checked?: boolean): Promise<object> | void {
  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve) => {
      window.chrome.storage.sync.set(
        {
          [DISABLED]: checked ? Enabled.YES : Enabled.NO,
        },
        resolve
      );
    });
  }
}

export function getOptions(): Promise<OptionsStorage> {
  return new Promise((resolve) => {
    if (process.env.NODE_ENV !== 'production') {
      return resolve({
        [CLEAR_CACHE_ENABLED]: Enabled.YES,
        [CORS_ENABLED_STORAGE_KEY]: Enabled.YES,
      });
    }
    window.chrome.storage.sync.get(
      {
        [CLEAR_CACHE_ENABLED]: Enabled.YES,
        [CORS_ENABLED_STORAGE_KEY]: Enabled.YES,
      },
      (result) => {
        resolve({
          [CLEAR_CACHE_ENABLED]: result.clearCacheEnabled,
          [CORS_ENABLED_STORAGE_KEY]: result.corsEnabled,
        });
      }
    );
  });
}

export function setOptions(options: any): Promise<OptionsStorage> | void {
  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve) => {
      window.chrome.storage.sync.set(
        {
          clearCacheEnabled: options.clearCacheEnabled
            ? Enabled.YES
            : Enabled.NO,
          corsEnabled: options.corsEnabled ? Enabled.YES : Enabled.NO,
        },
        resolve
      );
    });
  }
}

export function openLink(url: string, isInner: boolean = false): void {
  chrome.tabs.create(
    { url: isInner ? chrome.extension.getURL(url) : url },
    (tab) => {
      // Tab opened.
    }
  );
}
