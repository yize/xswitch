import { Enabled, IconBackgroundColor, BadgeText } from './enum';
import forward from './forward';

let clearRunning: boolean = false;
let clearCacheEnabled: boolean = true;
let corsEnabled: boolean = true;
let parseError: boolean = false;

chrome.storage.sync.get('config', result => {
  try {
    1;
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
    console.log('can not parse config');
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
      console.warn('can not parse fresh config', changes.config.newValue);
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
    urls: ['<all_urls>']
  },
  ['blocking']
);

//Breaking the CORS Limitation
chrome.webRequest.onHeadersReceived.addListener(
  headersReceivedListener,
  {
    urls: ['<all_urls>']
  },
  ['blocking', 'responseHeaders']
);

chrome.webRequest.onBeforeSendHeaders.addListener(
  details => forward.onBeforeSendHeadersCallback(details),
  { urls: ['<all_urls>'] },
  ['blocking', 'requestHeaders']
);

function setBadgeAndBackgroundColor(text: string | number, color: string) {
  const { browserAction } = chrome;
  browserAction.setBadgeText({
    text: '' + text
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
) {
  return forward.onHeadersReceivedCallback(details, corsEnabled);
}

function clearCache(): void {
  if (!clearRunning) {
    clearRunning = true;
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
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
