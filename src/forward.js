window.lastRequestId = null;
window.proxyConfig = {};
window.urls = new Array(200); // for cache

window.isString = string => ({}.toString.call(string) === '[object String]');
//Breaking the CORS Limitation
window.onHeadersReceivedCallback = details => {
  const rules = window.proxyConfig.proxy;
  // in case of chrome-extension downtime
  if (!rules || !rules.length || /^chrome-extension:\/\//i.test(details.url)) {
    return {};
  }
  for (let i = 0; i < rules.length; i++) {
    if (details.url && details.url.indexOf(getHostName(rules[i][1])) > -1) {
      let hasAccessControlAllowOriginHeader = false;
      let headerNames = details.responseHeaders.map(item => {
        if (item.name == "Access-Control-Allow-Origin") {
          hasAccessControlAllowOriginHeader = true;
          //item.value = `http://${getHostName(rules[i][0])}`
          item.value = rules[i][0].substring(0,rules[i][0].lastIndexOf('/'))
        }
        return item;
      });
      if (!hasAccessControlAllowOriginHeader) {
        headerNames.push({
          name: "Access-Control-Allow-Origin",
          //value: `http://${getHostName(rules[i][0])}`
          //协议域名和端口
          value:rules[i][0].substring(0,rules[i][0].lastIndexOf('/'))
        });
        headerNames.push({
          name: "Access-Control-Allow-Credentials",
          value: "true"
        });
        headerNames.push({
          name: "Access-Control-Allow-Headers",
          value: "x-requested-with,Content-Type"
        });
      }
      return {
        responseHeaders: headerNames
      };
    }
  }

  function getHostName(url) {
    if (url.startsWith("http")) {
      return url.split("/")[2];
    } else {
      return url.split("/")[0];
    }
  }
};

window.redirectToMatchingRule = (details) => {
  const rules = window.proxyConfig.proxy;
  let redirectUrl = details.url;

  // in case of chrome-extension downtime
  if (!rules || !rules.length || /^chrome-extension:\/\//i.test(redirectUrl)) {
    return {};
  }

  if (
    /http(s?):\/\/.*\.(js|css|json|jsonp)/.test(redirectUrl) &&
    window.urls.indexOf(redirectUrl) < 0
  ) {
    window.urls.shift();
    window.urls.push(redirectUrl);
  }

  try {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      if (rule && rule[0] && window.isString(rule[1])) {
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
