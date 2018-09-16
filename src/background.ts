import forward from './forward';

let clearRunning = false;
let clearCacheEnabled = true;
let corsEnabled = true;
let parseError = false;

chrome.storage.sync.get('config', result => {
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
    console.log('can not parse config');
    forward.config.proxy = [];
    parseError = true;
  }
});

function setIcon() {
  let text = 0;
  const { browserAction } = chrome;
  text = forward.config.proxy.length;

  if (parseError) {
    browserAction.setBadgeText({
      text: '' + 'Error'
    });
    browserAction.setBadgeBackgroundColor({
      color: '#c53929'
    });
    return;
  }

  if (forward.disabled !== 'disabled') {
    browserAction.setBadgeText({
      text: '' + text
    });
    browserAction.setBadgeBackgroundColor({
      color: '#3367d6'
    });
  } else {
    browserAction.setBadgeText({
      text: '' + 'OFF'
    });
    browserAction.setBadgeBackgroundColor({
      color: '#bfbfbf'
    });
    return;
  }
}

function headersReceivedListener(details) {
  return forward.onHeadersReceivedCallback(details, corsEnabled);
}

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
    clearCacheEnabled = changes.clearCacheEnabled.newValue === 'enabled';
  }

  if (changes.corsEnabled) {
    corsEnabled = changes.corsEnabled.newValue === 'enabled';
  }

  setIcon();
});

function clearCache() {
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

chrome.storage.sync.get(
  {
    disabled: 'enabled',
    clearCacheEnabled: 'enabled',
    corsEnabled: 'enabled'
  },
  result => {
    forward.disabled = result.disabled;
    clearCacheEnabled = result.clearCacheEnabled === 'enabled';
    corsEnabled = result.corsEnabled === 'enabled';
    setIcon();
  }
);

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    if (forward.disabled !== 'disabled') {
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
