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

interface OptionsStorage {
  [CLEAR_CACHE_ENABLED]: string;
  [CORS_ENABLED_STORAGE_KEY]: string;
}

function getChromeStorageSyncValue(key: string, defaultValue: any): any {
  return new Promise((resolve) => {
    window.chrome.storage.sync.get({
      [key]: defaultValue,
    }, (result: any) => {
      resolve(result[key]);
    });
  });
}

export async function getConfig(editingConfigKey: string): Promise<string> {
  const key = `${JSONC_CONFIG}_${editingConfigKey}`;
  return getChromeStorageSyncValue(key, '');
}

export async function getActiveKeys(): Promise<string> {
  return getChromeStorageSyncValue(ACTIVE_KEYS, ['0']);
}

export function getTabList(): Promise<any> {
  return getChromeStorageSyncValue(TAB_LIST, [{
    id: '0',
    name: 'Current',
  }]);
}

export function setActiveKeys(keys?: string[]): Promise<object> | void {
  return new Promise((resolve) => {
    window.chrome.storage.sync.set(
      {
        [ACTIVE_KEYS]: keys,
      },
      resolve
    );
  });
}

export function setConfigItems(items?: any): Promise<object> | void {
  return new Promise((resolve) => {
    window.chrome.storage.sync.set(
      {
        [TAB_LIST]: items.slice(),
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
  const JSONC_KEY = `${JSONC_CONFIG}_${editingConfigKey}`;

  return new Promise((resolve) => {
    window.chrome.storage.sync.get({
      [JSONC_KEY]: '',
      [editingConfigKey]: '',
    }, (result) => {
      result[JSONC_KEY] = jsonc;

      JSON_Parse(json, (error, parsedJSON) => {
        if (!error) {
          result[editingConfigKey] = parsedJSON;
          return;
        }
        result[editingConfigKey] = '';
      });

      window.chrome.storage.sync.set(
        result,
        resolve
      );
    });
  });
}

export function getChecked(): Promise<string> {
  return new Promise((resolve) => {
    window.chrome.storage.sync.get(DISABLED, (result: any) => {
      resolve(result[DISABLED]);
    });
  });
}

export function setChecked(checked?: boolean): Promise<object> | void {
  return new Promise((resolve) => {
    window.chrome.storage.sync.set(
      {
        [DISABLED]: checked ? Enabled.YES : Enabled.NO,
      },
      resolve
    );
  });
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
          clearCacheEnabled: options.clearCacheEnabled ? Enabled.YES : Enabled.NO,
          corsEnabled: options.corsEnabled ? Enabled.YES : Enabled.NO,
        },
        resolve
      );
    });
  }
}

export function migrate(): any {
  return new Promise((resolve) => {
    window.chrome.storage.sync.get({
      [TAB_LIST]: [],
      [JSON_CONFIG]: {},
      [JSONC_CONFIG]: {},
    }, (oldItems) => {
      const newItems = {};
      oldItems.tab_list.forEach((item: any) => {
        const { id } = item;
        // @ts-ignore
        newItems[`config_${id}`] = oldItems.config[id];
        // @ts-ignore
        newItems[`config_for_shown_${id}`] = oldItems.config_for_shown[id];
      });
      window.chrome.storage.sync.set(
        newItems,
        resolve
      );
    });
  });
}

export function openLink(url: string, isInner: boolean = false): void {
  chrome.tabs.create(
    { url: isInner ? chrome.extension.getURL(url) : url },
    (tab) => {
      // Tab opened.
    }
  );
}
