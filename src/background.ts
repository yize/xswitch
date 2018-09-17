import { ALL_URLS, BLOCKING, EMPTY_STRING, JSONC_STORAGE_KEY, MILLISECONDS_PER_WEEK, REQUEST_HEADERS, RESPONSE_HEADERS } from './constant';
import { BadgeText, Enabled, IconBackgroundColor } from './enum';
import forward from './forward';

let clearRunning: boolean = false;
let clearCacheEnabled: boolean = true;
let corsEnabled: boolean = true;
let parseError: boolean = false;

chrome.storage.sync.get(JSONC_STORAGE_KEY, result => {
  try {
    if (result && result.config) {
      forward.config = JSON.parse(result.config);
    } else {
      forward.config = {
        proxy: [],
        cors: []
      };
    }
    parseError = false;
  } catch (e) {
    forward.config.proxy = [];
    parseError = true;
  }
});

chrome.storage.sync.get(
  {
    disabled: Enabled.YES,
    clearCacheEnabled: Enabled.YES,
    corsEnabled: Enabled.YES
  },
  result => {
    forward.disabled = result.disabled;
    clearCacheEnabled = result.clearCacheEnabled === Enabled.YES;
    corsEnabled = result.corsEnabled === Enabled.YES;
    setIcon();
  }
);

chrome.storage.onChanged.addListener(changes => {
  if (changes.config) {
    try {
      forward.config = JSON.parse(changes.config.newValue);
      parseError = false;
    } catch (e) {
      forward.config.proxy = [];
      parseError = true;
    }
  }
  if (changes.disabled) {
    forward.disabled = changes.disabled.newValue;
  }

  if (changes.clearCacheEnabled) {
    clearCacheEnabled = changes.clearCacheEnabled.newValue === Enabled.YES;
  }

  if (changes.corsEnabled) {
    corsEnabled = changes.corsEnabled.newValue === Enabled.YES;
  }

  setIcon();
});

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    if (forward.disabled !== Enabled.NO) {
      if (clearCacheEnabled) {
        clearCache();
      }

      return forward.onBeforeRequestCallback(details);
    }
    return {};
  },
  {
    urls: [ALL_URLS]
  },
  [BLOCKING]
);

//Breaking the CORS Limitation
chrome.webRequest.onHeadersReceived.addListener(
  headersReceivedListener,
  {
    urls: [ALL_URLS]
  },
  [BLOCKING, RESPONSE_HEADERS]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
  details => forward.onBeforeSendHeadersCallback(details),
  { urls: [ALL_URLS] },
  [BLOCKING, REQUEST_HEADERS]
);

function setBadgeAndBackgroundColor(
  text: string | number,
  color: string
): void {
  const { browserAction } = chrome;
  browserAction.setBadgeText({
    text: EMPTY_STRING + text
  });
  browserAction.setBadgeBackgroundColor({
    color
  });
}

function setIcon(): void {
  if (parseError) {
    setBadgeAndBackgroundColor(BadgeText.ERROR, IconBackgroundColor.ERROR);
    return;
  }

  if (forward.disabled !== Enabled.NO) {
    setBadgeAndBackgroundColor(
      forward.config.proxy.length,
      IconBackgroundColor.ON
    );
  } else {
    setBadgeAndBackgroundColor(BadgeText.OFF, IconBackgroundColor.OFF);
    return;
  }
}

function headersReceivedListener(
  details: chrome.webRequest.WebResponseHeadersDetails
): chrome.webRequest.BlockingResponse {
  return forward.onHeadersReceivedCallback(details, corsEnabled);
}

function clearCache(): void {
  if (!clearRunning) {
    clearRunning = true;
    const millisecondsPerWeek = MILLISECONDS_PER_WEEK;
    const oneWeekAgo = new Date().getTime() - millisecondsPerWeek;
    chrome.browsingData.removeCache(
      {
        since: oneWeekAgo
      },
      () => {
        clearRunning = false;
      }
    );
  }
}
