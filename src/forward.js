window.lastRequestId = null;
window.proxyConfig = {};
window.urls = new Array(200); // for cache
window.isString = string => ({}.toString.call(string) === "[object String]");
window.originRequest = new Map();
window.originRequestHeaders = new Map();

window.matchUrl = (url, reg) => {
  // support [ ] ( ) \ * ^ $
  if (/\\|\[|]|\(|\)|\*|\$|\^/i.test(reg)) {
    // support ??
    reg = new RegExp(reg.replace("??", "\\?\\?"), "i");
    let matched = reg.test(url);
    if (matched) {
      return "reg";
    }
  } else {
    let matched = url.indexOf(reg) > -1;
    if (matched) {
      return "string";
    }
  }
  return false;
};

//Breaking the CORS Limitation
window.onHeadersReceivedCallback = (details, cors = true) => {
  // has cors rules
  let corsMap = window.proxyConfig.cors;
  let corsMatched = false;

  if (corsMap && corsMap.length) {
    corsMap.forEach(rule => {
      if (matchUrl(details.url, rule)) {
        corsMatched = true;
      }
    });
  }

  if (window.proxyDisabled == "disabled" || !cors || !corsMatched) {
    return {};
  }

  let originUrl = details.url;
  let resHeaders = [];
  let CORSOrigin =
    (window.originRequest.get(details.requestId)
      ? window.originRequest.get(details.requestId)
      : details.initiator) || "*";

  if (details.responseHeaders && details.responseHeaders.filter) {
    let hasCredentials = false;
    let tempOrigin = "";
    resHeaders = details.responseHeaders.filter(responseHeader => {
      // Already has access-control-allow-origin headers
      if ("access-control-allow-origin" === responseHeader.name.toLowerCase()) {
        tempOrigin = responseHeader.value;
      }

      if ("access-control-allow-credentials" === responseHeader.name.toLowerCase()) {
        hasCredentials = responseHeader.value;
      }

      if (
        [
          "access-control-allow-origin",
          "access-control-allow-credentials",
          "access-control-allow-methods",
          "access-control-allow-headers"
        ].indexOf(responseHeader.name.toLowerCase()) < 0
      ) {
        return true;
      }
      return false;
    });

    // only when hasCredentials
    if (hasCredentials) {
      CORSOrigin = tempOrigin;
    }
  }

  // suck point
  if (
    CORSOrigin === "*" &&
    window.originRequest.get(details.requestId) === "null"
  ) {
    CORSOrigin = "*";
  }

  resHeaders.push({
    name: "Access-Control-Allow-Origin",
    value: CORSOrigin
  });
  resHeaders.push({ name: "Access-Control-Allow-Credentials", value: "true" });
  resHeaders.push({
    name: "Access-Control-Allow-Methods",
    value: "*"
  });
  let CORSHeader = window.originRequestHeaders.get(details.requestId)
    ? "," + window.originRequestHeaders.get(details.requestId)
    : "";
  resHeaders.push({
    name: "Access-Control-Allow-Headers",
    value:
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Referer" +
      CORSHeader
  });

  return {
    responseHeaders: resHeaders
  };
};

window.redirectToMatchingRule = details => {
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
        let matched = matchUrl(redirectUrl, reg);

        if (details.requestId !== lastRequestId) {
          if (matched === "reg") {
            reg = new RegExp(reg.replace("??", "\\?\\?"), "i");
            redirectUrl = redirectUrl.replace(reg, rule[1]);
          } else if (matched === "string") {
            redirectUrl = redirectUrl.split(rule[0]).join(rule[1]);
          }
        }
      }
    }
  } catch (e) {
    console.error("rule match error", e);
  }

  window.lastRequestId = details.requestId;
  return redirectUrl === details.url ? {} : { redirectUrl };
};

window.onBeforeSendHeadersCallback = function (details) {
  let headers = [];
  for (var i = 0; i < details.requestHeaders.length; ++i) {
    const requestName = details.requestHeaders[i].name.toLowerCase();
    if (requestName === "origin") {
      window.originRequest.set(
        details.requestId,
        details.requestHeaders[i].value
      );
    } else if (
      requestName === "access-control-request-headers" ||
      /^x-/.test(requestName)
    ) {
      headers.push(requestName);
    }
  }
  if (headers.length) {
    window.originRequestHeaders.set(details.requestId, headers.join(","));
  }
  return { requestHeaders: details.requestHeaders };
};

window.onBeforeRequestCallback = details => redirectToMatchingRule(details);
