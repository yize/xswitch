window.proxyDisabled = '';
window.clearRunning = false;
chrome.storage.sync.get('config', (result) => {
  try {
    window.proxyConfig = JSON.parse(result.config);
  } catch (e) {
    console.log('can not parse config', result.config);
  }
});

function setIcon(disabled) {
  chrome.browserAction.setIcon({
    path: `images/${disabled === 'disabled' ? 'grey' : 'blue'}_128.png`,
  });
}

chrome.storage.onChanged.addListener((changes) => {
  if (changes.config) {
    try {
      window.proxyConfig = JSON.parse(changes.config.newValue);
    } catch (e) {
      console.log('can not parse fresh config', changes.config.newValue);
    }
  }
  if (changes.disabled) {
    setIcon(changes.disabled.newValue);
    window.proxyDisabled = changes.disabled.newValue;
  }
});

function clearCache() {
  if (!window.clearRunning) {
    window.clearRunning = true;
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const oneWeekAgo = new Date().getTime() - millisecondsPerWeek;
    chrome.browsingData.removeCache(
      {
        since: oneWeekAgo,
      },
      () => {
        window.clearRunning = false;
      },
    );
  }
}

chrome.storage.sync.get('disabled', (result) => {
  window.proxyDisabled = result.disabled;
  setIcon(result.disabled);
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (window.proxyDisabled !== 'disabled') {
      clearCache();
      return window.onBeforeRequestCallback(details);
    }
    return {};
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking'],
);
