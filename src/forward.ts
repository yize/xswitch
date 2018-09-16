interface IFowardConfig {
  proxy?: Array<Array<string>>;
  cors?: Array<string>;
}

const matchUrl = (url, reg) => {
  // support [ ] ( ) \ * ^ $
  if (/\\|\[|]|\(|\)|\*|\$|\^/i.test(reg)) {
    // support ??
    let r = new RegExp(reg.replace('??', '\\?\\?'), 'i');
    let matched = r.test(url);
    if (matched) {
      return 'reg';
    }
  } else {
    let matched = url.indexOf(reg) > -1;
    if (matched) {
      return 'string';
    }
  }
  return false;
};
class Foward {
  private _lastRequestId: number | null = null;
  private _disabled: string = 'enabled';
  private _config: IFowardConfig = {};
  private _originRequest: Map<string, string> = new Map();
  private _originRequestHeaders: Map<string, string> = new Map();

  public urls: Array<string> = new Array(200); // for cache

  get disabled(): string {
    return this._disabled;
  }
  set disabled(newValue: string) {
    this._disabled = newValue;
  }
  get config(): IFowardConfig {
    return this._config;
  }
  set config(newValue: IFowardConfig) {
    this._config = { ...newValue };
  }

  //Breaking the CORS Limitation
  onHeadersReceivedCallback(details, cors = true) {
    // has cors rules
    let corsMap = this.config.cors;
    let corsMatched = false;

    if (corsMap && corsMap.length) {
      corsMap.forEach(rule => {
        if (matchUrl(details.url, rule)) {
          corsMatched = true;
        }
      });
    }

    if (this.disabled == 'disabled' || !cors || !corsMatched) {
      return {};
    }

    let originUrl = details.url;
    let resHeaders = [];
    let CORSOrigin =
      (this._originRequest.get(details.requestId)
        ? this._originRequest.get(details.requestId)
        : details.initiator) || '*';

    if (details.responseHeaders && details.responseHeaders.filter) {
      let hasCredentials = false;
      let tempOrigin = '';
      resHeaders = details.responseHeaders.filter(responseHeader => {
        // Already has access-control-allow-origin headers
        if (
          'access-control-allow-origin' === responseHeader.name.toLowerCase()
        ) {
          tempOrigin = responseHeader.value;
        }

        if (
          'access-control-allow-credentials' ===
          responseHeader.name.toLowerCase()
        ) {
          hasCredentials = responseHeader.value;
        }

        if (
          [
            'access-control-allow-origin',
            'access-control-allow-credentials',
            'access-control-allow-methods',
            'access-control-allow-headers'
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
      CORSOrigin === '*' &&
      this._originRequest.get(details.requestId) === 'null'
    ) {
      CORSOrigin = '*';
    }

    resHeaders.push({
      name: 'Access-Control-Allow-Origin',
      value: CORSOrigin
    });
    resHeaders.push({
      name: 'Access-Control-Allow-Credentials',
      value: 'true'
    });
    resHeaders.push({
      name: 'Access-Control-Allow-Methods',
      value: '*'
    });
    let CORSHeader = this._originRequestHeaders.get(details.requestId)
      ? ',' + this._originRequestHeaders.get(details.requestId)
      : '';
    resHeaders.push({
      name: 'Access-Control-Allow-Headers',
      value:
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Referer' +
        CORSHeader
    });

    return {
      responseHeaders: resHeaders
    };
  }

  redirectToMatchingRule(details) {
    const rules = this.config.proxy;
    let redirectUrl = details.url;

    // in case of chrome-extension downtime
    if (
      !rules ||
      !rules.length ||
      /^chrome-extension:\/\//i.test(redirectUrl)
    ) {
      return {};
    }

    if (
      /http(s?):\/\/.*\.(js|css|json|jsonp)/.test(redirectUrl) &&
      this.urls.indexOf(redirectUrl) < 0
    ) {
      this.urls.shift();
      this.urls.push(redirectUrl);
    }

    try {
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule && rule[0] && typeof rule[1] === 'string') {
          let reg = rule[0];
          let matched = matchUrl(redirectUrl, reg);

          if (details.requestId !== this._lastRequestId) {
            if (matched === 'reg') {
              let r = new RegExp(reg.replace('??', '\\?\\?'), 'i');
              redirectUrl = redirectUrl.replace(r, rule[1]);
            } else if (matched === 'string') {
              redirectUrl = redirectUrl.split(rule[0]).join(rule[1]);
            }
          }
        }
      }
    } catch (e) {
      console.error('rule match error', e);
    }

    this._lastRequestId = details.requestId;
    return redirectUrl === details.url ? {} : { redirectUrl };
  }

  onBeforeSendHeadersCallback(details) {
    let headers = [];
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      const requestName = details.requestHeaders[i].name.toLowerCase();
      if (requestName === 'origin') {
        this._originRequest.set(
          details.requestId,
          details.requestHeaders[i].value
        );
      } else if (
        requestName === 'access-control-request-headers' ||
        /^x-/.test(requestName)
      ) {
        headers.push(requestName);
      }
    }
    if (headers.length) {
      this._originRequestHeaders.set(details.requestId, headers.join(','));
    }
    return { requestHeaders: details.requestHeaders };
  }

  onBeforeRequestCallback(details) {
    return this.redirectToMatchingRule(details);
  }
}

export default new Foward;
