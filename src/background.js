window.proxyDisabled = '';
window.clearRunning = false;
window.clearCacheEnabled = true;
window.corsEnabled = true;
chrome.storage.sync.get('config', result => {
  try {
    window.proxyConfig = JSON.parse(result.config);
  } catch (e) {
    console.warn('can not parse config', result.config);
    window.proxyConfig.proxy = [];
  }
});

function setIcon() {
  let text = '';
  const cba = chrome.browserAction;
  if (
    window.proxyDisabled !== 'disabled' &&
    window.proxyConfig.proxy &&
    window.proxyConfig.proxy.length
  ) {
    text = window.proxyConfig.proxy.length;
  }

  if (cba) {
    cba.setBadgeText({
      text: '' + text
    });
  }
}

function headersReceivedListener(details) {
  return window.onHeadersReceivedCallback(details, window.corsEnabled)
}


chrome.storage.onChanged.addListener(changes => {
  if (changes.config) {
    try {
      window.proxyConfig = JSON.parse(changes.config.newValue);
    } catch (e) {
      console.warn('can not parse fresh config', changes.config.newValue);
      window.proxyConfig.proxy = [];
    }
  }
  if (changes.disabled) {
    window.proxyDisabled = changes.disabled.newValue;
  }

  if (changes.clearCacheEnabled) {
    window.clearCacheEnabled = changes.clearCacheEnabled.newValue === 'enabled';
  }

  if (changes.corsEnabled) {
    window.corsEnabled = changes.corsEnabled.newValue === 'enabled';
  }

  setIcon();
});

function clearCache() {
  if (!window.clearRunning) {
    window.clearRunning = true;
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const oneWeekAgo = new Date().getTime() - millisecondsPerWeek;
    chrome.browsingData.removeCache(
      {
        since: oneWeekAgo
      },
      () => {
        window.clearRunning = false;
      }
    );
  }
}

chrome.storage.sync.get({
  'disabled': 'enabled',
  'clearCacheEnabled': 'enabled',
  'corsEnabled': 'enabled',
}, result => {
  window.proxyDisabled = result.disabled;
  window.clearCacheEnabled = result.clearCacheEnabled === 'enabled';
  window.corsEnabled = result.corsEnabled === 'enabled';
  setIcon();
});

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    if (window.proxyDisabled !== 'disabled') {
      if (window.clearCacheEnabled) {
        clearCache();
      }

      return window.onBeforeRequestCallback(details);
    }
    return {};
  },
  {
    urls: ['<all_urls>']
  },
  ['blocking']
);

//Breaking the CORS Limitation
chrome.webRequest.onHeadersReceived.addListener(headersReceivedListener,
  {
    urls: ['<all_urls>']
  },
  ['blocking', 'responseHeaders']
);

chrome.webRequest.onBeforeSendHeaders.addListener(
  details => window.onBeforeSendHeadersCallback(details),
  { urls: ['<all_urls>'] },
  ['blocking', 'requestHeaders']
);
