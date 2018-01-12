let lastRequestId;
let proxyConfig = {};
window.urls = new Array(200); // for cache

chrome.storage.sync.get('config', (result) => {
  try {
    proxyConfig = JSON.parse(result.config);
  } catch (e) {}
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.config) {
    try {
      proxyConfig = JSON.parse(changes.config.newValue);
    } catch (e) {}
  }
});

const redirectToMatchingRule = (details) => {
  const rules = proxyConfig.proxy;
  try {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      if (rule && rule[0]) {
        let reg = rule[0];
        let matched = false;

        // support [ ] ( ) \ * ^ $
        if (/\\|\[|]|\(|\)|\*|\$|\^/i.test(reg)) {
          // support ??
          reg = new RegExp(reg.replace('??', '\\?\\?'), 'i');
          matched = reg.test(details.url);
        } else {
          matched = details.url.indexOf(reg) > -1;
        }

        if (matched && details.requestId !== lastRequestId) {
          lastRequestId = details.requestId;
          return {
            redirectUrl: details.url.replace(reg, rule[1]),
          };
        }
      }
    }
  } catch (e) {
    return {};
  }
};

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // we just suggest .js css .json .jsonp
    if (
      /http(s?):\/\/.*\.(js|css|json|jsonp)/i.test(details.url) &&
      window.urls.indexOf(details.url) < 0
    ) {
      window.urls.shift();
      window.urls.push(details.url);
    }
    return redirectToMatchingRule(details);
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking'],
);
