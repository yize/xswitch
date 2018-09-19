import {
    JSONC_STORAGE_KEY,
    KEY_CODE_S,
    KEY_DOWN,
    LANGUAGE_JSON,
    MONACO_CONTRIBUTION_PATH,
    MONACO_VS_PATH,
    NEW_TAB_DOM_ID,
    OPACITY_VISIBLE,
    OPEN_README_DOM_ID,
    PLATFORM_MAC,
    POPUP_HTML_PATH,
    RULE,
    RULE_COMPLETION,
    SHOW_FOLDING_CONTROLS,
    SWITCH_AREA_DOM_ID,
    SWITCH_CHECKED_CLASSNAME,
    SWITCH_DOM_ID,
    SWITCH_INNER_DOM_ID,
    JSON_STORAGE_KEY
} from './constants';
import { JSONC2JSON } from './utils';

export function getConfig() {
    return new Promise((resolve) => {
        if (process.env.NODE_ENV !== 'production') {
            resolve({
                proxy: [],
                cors: [],
            });
        } else {
            window.chrome.storage.sync.get(JSONC_STORAGE_KEY, resolve);
        }
    });
}

export function saveConfig(jsonc: string) {
    const json = JSONC2JSON(jsonc);

    return new Promise((resolve) => {
        if (process.env.NODE_ENV === 'production') {
            window.chrome.storage.sync.set(
                {
                    [JSONC_STORAGE_KEY]: jsonc,
                    [JSON_STORAGE_KEY]: json
                },
                resolve
            );
        }
    });
}