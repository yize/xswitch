import {
  ALL_URLS,
  BLOCKING,
  EMPTY_STRING,
  MILLISECONDS_PER_WEEK,
  REQUEST_HEADERS,
  RESPONSE_HEADERS,
  JSON_CONFIG,
  DISABLED,
  CLEAR_CACHE_ENABLED,
  CORS_ENABLED_STORAGE_KEY,
  PROXY_STORAGE_KEY,
  CORS_STORAGE,
  ACTIVE_KEYS,
  TAB_LIST,
} from './constants';
import {
  BadgeText,
  Enabled,
  IconBackgroundColor,
} from './enums';
import forward from './forward';

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

chrome.storage.sync.get({
  [JSON_CONFIG]: {
    0: {
      [PROXY_STORAGE_KEY]: [],
      [CORS_STORAGE]: [],
    },
  },
  [ACTIVE_KEYS]: ['0'],
}, (result) => {
  jsonActiveKeys = result[ACTIVE_KEYS];
  if (result && result[JSON_CONFIG]) {
    conf = result[JSON_CONFIG];
    const config = getActiveConfig(conf);
    forward[JSON_CONFIG] = { ...config };
  } else {
    forward[JSON_CONFIG] = {
      [PROXY_STORAGE_KEY]: [],
      [CORS_STORAGE]: [],
    };
    parseError = false;
  }
});

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

chrome.storage.sync.get(
  {
    [DISABLED]: Enabled.YES,
    [CLEAR_CACHE_ENABLED]: Enabled.YES,
    [CORS_ENABLED_STORAGE_KEY]: Enabled.YES,
  },
  (result) => {
    forward[DISABLED] = result[DISABLED];
    clearCacheEnabled = result[CLEAR_CACHE_ENABLED] === Enabled.YES;
    corsEnabled = result[CORS_ENABLED_STORAGE_KEY] === Enabled.YES;
    setIcon();
  }
);

chrome.storage.onChanged.addListener((changes) => {
  if (changes[ACTIVE_KEYS]) {
    jsonActiveKeys = changes[ACTIVE_KEYS].newValue;
  }

  if (changes[JSON_CONFIG]) {
    const config = getActiveConfig(changes[JSON_CONFIG].newValue);
    forward[JSON_CONFIG] = { ...config };
  }

  if (changes[DISABLED]) {
    forward[DISABLED] = changes[DISABLED].newValue;
  }

  if (changes[CLEAR_CACHE_ENABLED]) {
    clearCacheEnabled = changes[CLEAR_CACHE_ENABLED].newValue === Enabled.YES;
  }

  if (changes[CORS_ENABLED_STORAGE_KEY]) {
    corsEnabled = changes[CORS_ENABLED_STORAGE_KEY].newValue === Enabled.YES;
  }

  chrome.storage.sync.get({
    [JSON_CONFIG]: {
      0: {
        [PROXY_STORAGE_KEY]: [],
        [CORS_STORAGE]: [],
      },
    },
  }, (result) => {
    if (result && result[JSON_CONFIG]) {
      conf = result[JSON_CONFIG];
      const config = getActiveConfig(conf);
      forward[JSON_CONFIG] = { ...config };
    }
    setIcon();
  });
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (forward[DISABLED] !== Enabled.NO) {
      if (clearCacheEnabled) {
        clearCache();
      }

      return forward.onBeforeRequestCallback(details);
    }
    return {};
  },
  {
    urls: [ALL_URLS],
  },
  [BLOCKING]
);

// Breaking the CORS Limitation
chrome.webRequest.onHeadersReceived.addListener(
  headersReceivedListener,
  {
    urls: [ALL_URLS],
  },
  [BLOCKING, RESPONSE_HEADERS]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => forward.onBeforeSendHeadersCallback(details),
  { urls: [ALL_URLS] },
  [BLOCKING, REQUEST_HEADERS]
);

function setBadgeAndBackgroundColor(
  text: string | number,
  color: string
): void {
  const { browserAction } = chrome;
  browserAction.setBadgeText({
    text: EMPTY_STRING + text,
  });
  browserAction.setBadgeBackgroundColor({
    color,
  });
}

function setIcon(): void {
  if (parseError) {
    setBadgeAndBackgroundColor(BadgeText.ERROR, IconBackgroundColor.ERROR);
    return;
  }

  if (forward[DISABLED] !== Enabled.NO) {
    setBadgeAndBackgroundColor(
      forward[JSON_CONFIG][PROXY_STORAGE_KEY].length,
      IconBackgroundColor.ON
    );
  } else {
    setBadgeAndBackgroundColor(BadgeText.OFF, IconBackgroundColor.OFF);
    return;
  }
}

function headersReceivedListener(
  details: chrome.webRequest.WebResponseHeadersDetails): chrome.webRequest.BlockingResponse {
  return forward.onHeadersReceivedCallback(details, corsEnabled);
}

function clearCache(): void {
  if (!clearRunning) {
    clearRunning = true;
    const millisecondsPerWeek = MILLISECONDS_PER_WEEK;
    const oneWeekAgo = new Date().getTime() - millisecondsPerWeek;
    chrome.browsingData.removeCache(
      {
        since: oneWeekAgo,
      },
      () => {
        clearRunning = false;
      }
    );
  }
}
