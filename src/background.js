window.proxyDisabled = '';
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

chrome.storage.sync.get('disabled', (result) => {
  window.proxyDisabled = result.disabled;
  setIcon(result.disabled);
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (window.proxyDisabled !== 'disabled') {
      return window.onBeforeRequestCallback(details);
    }
    return {};
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking'],
);
