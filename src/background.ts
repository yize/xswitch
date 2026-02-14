/**
 * XSwitch - Manifest V3 Upgrade
 * 
 * Changes from V2:
 * - webRequest → declarativeNetRequest
 * - Blocking response → declarative rules
 * - Background script → Service Worker
 */

import {
  ALL_URLS,
  EMPTY_STRING,
  MILLISECONDS_PER_WEEK,
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
  DARK_MODE_MEDIA,
} from './constants';
import {
  BadgeText,
  Enabled,
  IconBackgroundColor,
} from './enums';
import forward from './forward';
import { ChromeStorageManager } from './chrome-storage';

// Chrome storage manager
const csmInstance = new ChromeStorageManager({
  useChromeStorageSyncFn: USE_CHROME_STORAGE_SYNC_FN,
});

// State
let clearRunning: boolean = false;
let clearCacheEnabled: boolean = true;
let corsEnabled: boolean = true;
let parseError: boolean = false;
let jsonActiveKeys = ['0'];
let conf: StorageJSON = {
  0: {
    [PROXY_STORAGE_KEY]: [],
    [CORS_STORAGE]: [],
  },
};

interface SingleConfig {
  [PROXY_STORAGE_KEY]: Array<[]>;
  [CORS_STORAGE]: string[];
}

interface StorageJSON {
  0: SingleConfig;
  [key: string]: any;
}

// ============================================================================
// Chrome Storage
// ============================================================================

// Load initial config
csmInstance.get({
  [JSON_CONFIG]: {
    0: {
      [PROXY_STORAGE_KEY]: [],
      [CORS_STORAGE]: [],
    },
  },
  [ACTIVE_KEYS]: ['0'],
}, (result: any) => {
  jsonActiveKeys = result[ACTIVE_KEYS];
  if (result && result[JSON_CONFIG]) {
    conf = result[JSON_CONFIG];
    const config = getActiveConfig(conf);
    updateDeclarativeNetRequestRules(config);
  } else {
    // Set default empty rules
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1, 2, 3, 4, 5],
    });
  }
});

// Listen for storage changes
chrome.storage.onChanged.addListener((changes) => {
  // Handle active keys change
  if (changes[ACTIVE_KEYS]) {
    jsonActiveKeys = changes[ACTIVE_KEYS].newValue;
  }

  // Handle config change
  if (changes[JSON_CONFIG]) {
    const config = getActiveConfig(changes[JSON_CONFIG].newValue);
    updateDeclarativeNetRequestRules(config);
  }

  // Handle enabled/disabled
  if (changes[DISABLED]) {
    forward[DISABLED] = changes[DISABLED].newValue;
    setIcon();
  }

  // Handle cache setting
  if (changes[CLEAR_CACHE_ENABLED]) {
    clearCacheEnabled = changes[CLEAR_CACHE_ENABLED].newValue === Enabled.YES;
  }

  // Handle CORS setting
  if (changes[CORS_ENABLED_STORAGE_KEY]) {
    corsEnabled = changes[CORS_ENABLED_STORAGE_KEY].newValue === Enabled.YES;
  }

  // Refresh config
  csmInstance.get({
    [JSON_CONFIG]: {
      0: {
        [PROXY_STORAGE_KEY]: [],
        [CORS_STORAGE]: [],
      },
    },
  }, (result: any) => {
    if (result && result[JSON_CONFIG]) {
      conf = result[JSON_CONFIG];
      const config = getActiveConfig(conf);
      updateDeclarativeNetRequestRules(config);
    }
    setIcon();
  });

  checkAndChangeIcons();
});

// ============================================================================
// Declarative Net Request (V3)
// ============================================================================

/**
 * Update declarativeNetRequest rules based on proxy config
 */
function updateDeclarativeNetRequestRules(config: any) {
  const proxyRules = config[PROXY_STORAGE_KEY] || [];
  const rules: chrome.declarativeNetRequest.Rule[] = [];
  let ruleId = 1;

  // Build redirect rules
  proxyRules.forEach((rule: any) => {
    if (Array.isArray(rule) && rule.length >= 2) {
      const [matcher, redirect] = rule;
      
      // URL redirect rule
      rules.push({
        id: ruleId++,
        priority: 1,
        condition: {
          urlFilter: matcher,
          resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest', 'script', 'stylesheet', 'image', 'font', 'object', 'ping', 'csp_report', 'media', 'websocket', 'other'],
        },
        action: {
          type: 'redirect',
          redirect: {
            url: redirect,
          },
        },
      });

      // Regex rule (if matcher contains regex pattern)
      if (typeof matcher === 'string' && matcher.includes('*')) {
        // Already handled above
      }
    }
  });

  // Update rules in Chrome
  if (rules.length > 0) {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: rules,
      removeRuleIds: rules.map((_, index) => index + 1),
    });
  } else {
    // Clear all rules
    chrome.declarativeNetRequest.getDynamicRules((existingRules) => {
      const ruleIds = existingRules.map(r => r.id);
      if (ruleIds.length > 0) {
        chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: ruleIds,
        });
      }
    });
  }

  // Update CORS headers via declarativeNetRequest
  updateCorsHeaders(config[CORS_STORAGE] || []);
}

/**
 * Update CORS headers rules
 */
function updateCorsHeaders(corsPatterns: string[]) {
  // In V3, we use modifyHeaders instead of adding headers directly
  // This is a simplified implementation
  console.log('CORS patterns:', corsPatterns);
}

// ============================================================================
// Event Listeners (V3 Compatible)
// ============================================================================

// Handle request (simplified - V3 doesn't support blocking onBeforeRequest the same way)
chrome.declarativeNetRequest.onBeforeRequest.addListener(
  (details) => {
    if (forward[DISABLED] !== Enabled.NO) {
      if (clearCacheEnabled) {
        clearCache();
      }
      // Rules are handled by declarativeNetRequest automatically
      return { cancel: false };
    }
    return { cancel: false };
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking']
);

// Handle headers (simplified)
chrome.declarativeNetRequest.onHeadersReceived.addListener(
  (details) => {
    if (corsEnabled) {
      // Add CORS headers
      return {
        responseHeaders: [
          ...(details.responseHeaders || []),
          { name: 'Access-Control-Allow-Origin', value: '*' },
          { name: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { name: 'Access-Control-Allow-Headers', value: '*' },
        ],
      };
    }
    return { responseHeaders: details.responseHeaders };
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking', 'responseHeaders']
);

// ============================================================================
// Helper Functions
// ============================================================================

function getActiveConfig(config: StorageJSON): object {
  const activeKeys = [...jsonActiveKeys];
  const json = config['0'];
  activeKeys.forEach((key: string) => {
    if (config[key] && key !== '0') {
      if (config[key][PROXY_STORAGE_KEY]) {
        if (!json[PROXY_STORAGE_KEY]) {
          json[PROXY_STORAGE_KEY] = [];
        }
        json[PROXY_STORAGE_KEY] = [...json[PROXY_STORAGE_KEY], ...config[key][PROXY_STORAGE_KEY]];
      }

      if (config[key][CORS_STORAGE]) {
        if (!json[CORS_STORAGE]) {
          json[CORS_STORAGE] = [];
        }
        json[CORS_STORAGE] = [...json[CORS_STORAGE], ...config[key][CORS_STORAGE]];
      }
    }
  });
  return json;
}

function setBadgeAndBackgroundColor(
  text: string | number,
  color: string
): void {
  chrome.action.setBadgeText({
    text: EMPTY_STRING + text,
  });
  chrome.action.setBadgeBackgroundColor({
    color,
  });
}

function setIcon(): void {
  if (parseError) {
    setBadgeAndBackgroundColor(BadgeText.ERROR, IconBackgroundColor.ERROR);
    return;
  }

  if (forward[DISABLED] !== Enabled.NO) {
    // Get rule count from declarativeNetRequest
    chrome.declarativeNetRequest.getDynamicRules((rules) => {
      setBadgeAndBackgroundColor(
        rules.length,
        IconBackgroundColor.ON
      );
    });
  } else {
    setBadgeAndBackgroundColor(BadgeText.OFF, IconBackgroundColor.OFF);
  }
}

function clearCache(): void {
  if (!clearRunning) {
    clearRunning = true;
    const oneWeekAgo = new Date().getTime() - MILLISECONDS_PER_WEEK;
    chrome.browsingData.removeCache(
      { since: oneWeekAgo },
      () => {
        clearRunning = false;
      }
    );
  }
}

function checkAndChangeIcons() {
  const isDarkMode = window.matchMedia(DARK_MODE_MEDIA);
  if (isDarkMode && isDarkMode.matches) {
    chrome.action.setIcon({ path: BLUE_ICON_PATH });
  } else {
    chrome.action.setIcon({ path: GREY_ICON_PATH });
  }
}

// Initialize
checkAndChangeIcons();
