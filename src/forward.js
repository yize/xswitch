window.lastRequestId = null;
window.proxyConfig = {};
window.urls = new Array(200); // for cache

window.redirectToMatchingRule = (details) => {
  let redirectUrl = details.url;
  if (
    /http(s?):\/\/.*\.(js|css|json|jsonp)/i.test(redirectUrl) &&
    window.urls.indexOf(redirectUrl) < 0
  ) {
    window.urls.shift();
    window.urls.push(redirectUrl);
  }

  // do not forwarding urls like chrome-extension://
  if (!/^http(s?):\/\//.test(redirectUrl)) {
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
          matched = reg.test(redirectUrl);
        } else {
          matched = redirectUrl.indexOf(reg) > -1;
        }

        if (matched && details.requestId !== window.lastRequestId) {
          redirectUrl = redirectUrl.replace(reg, rule[1]);
        }
      }
    }
  } catch (e) {
    console.error('rule match error', e);
  }
  window.lastRequestId = details.requestId;
  return redirectUrl === details.url ? {} : { redirectUrl };
};

window.onBeforeRequestCallback = details => window.redirectToMatchingRule(details);
