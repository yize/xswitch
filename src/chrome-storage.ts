import {
  JSONC_STORAGE_KEY,
  JSON_STORAGE_KEY,
  DISABLED_STORAGE_KEY,
  CLEAR_CACHE_ENABLED_STORAGE_KEY,
  CORS_ENABLED_STORAGE_KEY
} from "./constants";
import { JSONC2JSON } from "./utils";
import { Enabled } from "./enums";

interface ConfigStorage{
  [JSONC_STORAGE_KEY]: string,
}
interface OptionsStorage {
  [CLEAR_CACHE_ENABLED_STORAGE_KEY]: string,
  [CORS_ENABLED_STORAGE_KEY]: string,
}

export function getConfig(): Promise<ConfigStorage> {
  return new Promise(resolve => {
    if (process.env.NODE_ENV !== "production") {
      return resolve({
        [JSONC_STORAGE_KEY]: ""
      });
    }
    window.chrome.storage.sync.get(JSONC_STORAGE_KEY, (result: ConfigStorage) => {
      resolve(result);
    });
  });
}

export function saveConfig(jsonc: string): Promise<any> | void {
  const json = JSONC2JSON(jsonc);

  if (process.env.NODE_ENV === "production") {
    return new Promise(resolve => {
      window.chrome.storage.sync.set(
        {
          [JSONC_STORAGE_KEY]: jsonc,
          [JSON_STORAGE_KEY]: json
        },
        resolve
      );
    });
  }
}

export function getChecked(): Promise<string> {
  return new Promise(resolve => {
    if (process.env.NODE_ENV !== "production") {
      return resolve(Enabled.YES);
    }
    window.chrome.storage.sync.get(DISABLED_STORAGE_KEY, (result: any) => {
      resolve(result[DISABLED_STORAGE_KEY]);
    });
  });
}

export function setChecked(checked?: boolean): Promise<object> | void {
  if (process.env.NODE_ENV === "production") {
    return new Promise(resolve => {
      window.chrome.storage.sync.set(
        {
          [DISABLED_STORAGE_KEY]: checked ? Enabled.YES : Enabled.NO
        },
        resolve
      );
    });
  }
}


export function getOptions(): Promise<OptionsStorage> {
  return new Promise(resolve => {
    if (process.env.NODE_ENV !== "production") {
      return resolve({
        [CLEAR_CACHE_ENABLED_STORAGE_KEY]: Enabled.YES,
        [CORS_ENABLED_STORAGE_KEY]: Enabled.YES
      });
    }
    window.chrome.storage.sync.get(
      {
        [CLEAR_CACHE_ENABLED_STORAGE_KEY]: Enabled.YES,
        [CORS_ENABLED_STORAGE_KEY]: Enabled.YES
      },
      result => {
        resolve({
          [CLEAR_CACHE_ENABLED_STORAGE_KEY]: result.clearCacheEnabled,
          [CORS_ENABLED_STORAGE_KEY]: result.corsEnabled
        });
      }
    );
  });
}

export function setOptions(options: any): Promise<OptionsStorage> | void {
  if (process.env.NODE_ENV === "production") {
    return new Promise(resolve => {
      window.chrome.storage.sync.set(
        {
          clearCacheEnabled: options.clearCacheEnabled
            ? Enabled.YES
            : Enabled.NO,
          corsEnabled: options.corsEnabled ? Enabled.YES : Enabled.NO
        },
        resolve
      );
    });
  }
}
