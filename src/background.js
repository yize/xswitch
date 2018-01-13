chrome.storage.sync.get('config', (result) => {
  try {
    window.proxyConfig = JSON.parse(result.config);
  } catch (e) {
    console.log('can not parse config', result.config);
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.config) {
    try {
      window.proxyConfig = JSON.parse(changes.config.newValue);
    } catch (e) {
      console.log('can not parse fresh config', changes.config.newValue);
    }
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  window.onBeforeRequestCallback,
  {
    urls: ['<all_urls>'],
  },
  ['blocking'],
);
