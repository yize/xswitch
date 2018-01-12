chrome.storage.sync.get('config', (result) => {
  try {
    window.proxyConfig = JSON.parse(result.config);
  } catch (e) {}
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.config) {
    try {
      window.proxyConfig = JSON.parse(changes.config.newValue);
    } catch (e) {}
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  window.onBeforeRequestCallback,
  {
    urls: ['<all_urls>'],
  },
  ['blocking'],
);
