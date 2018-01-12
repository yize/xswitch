window.lastRequestId = null;
window.proxyConfig = {};
window.urls = new Array(200); // for cache

window.redirectToMatchingRule = (details) => {
  if (
    /http(s?):\/\/.*\.(js|css|json|jsonp)/i.test(details.url) &&
    window.urls.indexOf(details.url) < 0
  ) {
    window.urls.shift();
    window.urls.push(details.url);
  }

  // do not forwarding urls like chrome-extension://
  if (!/^http(s?):\/\//.test(details.url)) {
    return {};
  }

  const rules = window.proxyConfig.proxy;
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

        if (matched && details.requestId !== window.lastRequestId) {
          window.lastRequestId = details.requestId;
          return {
            redirectUrl: details.url.replace(reg, rule[1]),
          };
        } else {
          return {};
        }
      }
    }
  } catch (e) {
    return {};
  }
};

window.onBeforeRequestCallback = details => window.redirectToMatchingRule(details);
