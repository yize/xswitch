import {
  ALL_URLS,
  BLOCKING,
  EMPTY_STRING,
  MILLISECONDS_PER_WEEK,
  REQUEST_HEADERS,
  RESPONSE_HEADERS,
  JSON_STORAGE_KEY,
  DISABLED_STORAGE_KEY,
  CLEAR_CACHE_ENABLED_STORAGE_KEY,
  CORS_ENABLED_STORAGE_KEY,
  PROXY_STORAGE_KEY,
  CORS_STORAGE_KEY,
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

chrome.storage.sync.get(JSON_STORAGE_KEY, (result) => {
  if (result && result[JSON_STORAGE_KEY]) {
    JSON_Parse(result[JSON_STORAGE_KEY], (error, json) => {
      if (!error) {
        forward[JSON_STORAGE_KEY] = json;
        parseError = false;
      } else {
        forward[JSON_STORAGE_KEY][PROXY_STORAGE_KEY] = [];
        parseError = true;
      }
    });
  } else {
    forward[JSON_STORAGE_KEY] = {
      [PROXY_STORAGE_KEY]: [],
      [CORS_STORAGE_KEY]: [],
    };
    parseError = false;
  }
});

chrome.storage.sync.get(
  {
    [DISABLED_STORAGE_KEY]: Enabled.YES,
    [CLEAR_CACHE_ENABLED_STORAGE_KEY]: Enabled.YES,
    [CORS_ENABLED_STORAGE_KEY]: Enabled.YES,
  },
  (result) => {
    forward[DISABLED_STORAGE_KEY] = result[DISABLED_STORAGE_KEY];
    clearCacheEnabled = result[CLEAR_CACHE_ENABLED_STORAGE_KEY] === Enabled.YES;
    corsEnabled = result[CORS_ENABLED_STORAGE_KEY] === Enabled.YES;
    setIcon();
  }
);

chrome.storage.onChanged.addListener((changes) => {
  if (changes[JSON_STORAGE_KEY]) {
    JSON_Parse(changes[JSON_STORAGE_KEY].newValue, (error, json) => {
      if (!error) {
        forward[JSON_STORAGE_KEY] = json;
        parseError = false;
      } else {
        forward[JSON_STORAGE_KEY][PROXY_STORAGE_KEY] = [];
        parseError = true;
      }
    });
  }
  if (changes[DISABLED_STORAGE_KEY]) {
    forward[DISABLED_STORAGE_KEY] = changes[DISABLED_STORAGE_KEY].newValue;
  }

  if (changes[CLEAR_CACHE_ENABLED_STORAGE_KEY]) {
    clearCacheEnabled = changes[CLEAR_CACHE_ENABLED_STORAGE_KEY].newValue === Enabled.YES;
  }

  if (changes[CORS_ENABLED_STORAGE_KEY]) {
    corsEnabled = changes[CORS_ENABLED_STORAGE_KEY].newValue === Enabled.YES;
  }

  setIcon();
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (forward[DISABLED_STORAGE_KEY] !== Enabled.NO) {
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

function JSON_Parse(json: string, cb: (error: object | boolean, json?: object) => void): void {
  try {
    cb(false, JSON.parse(json));
  } catch (e) {
    cb(e);
  }
}

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

  if (forward[DISABLED_STORAGE_KEY] !== Enabled.NO) {
    setBadgeAndBackgroundColor(
      forward[JSON_STORAGE_KEY][PROXY_STORAGE_KEY].length,
      IconBackgroundColor.ON
    );
  } else {
    setBadgeAndBackgroundColor(BadgeText.OFF, IconBackgroundColor.OFF);
    return;
  }
}

function headersReceivedListener(details: chrome.webRequest.WebResponseHeadersDetails): chrome.webRequest.BlockingResponse {
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
