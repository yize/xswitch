import {
  CORS,
  DEFAULT_CORS_CREDENTIALS,
  DEFAULT_CORS_METHODS,
  DEFAULT_CORS_ORIGIN,
  ORIGIN,
  REG,
  EMPTY_STRING,
  DEFAULT_CREDENTIALS_RESPONSE_HEADERS,
  NULL_STRING,
  ACCESS_CONTROL_REQUEST_HEADERS,
} from './constants';
import { Enabled, UrlType } from './enums';

interface IFowardConfig {
  proxy?: string[][];
  cors?: string[];
}

/**
 * get url type
 * @param url urls
 * @param reg rule
 */
const matchUrl = (url: string, reg: string): string | boolean => {
  if (REG.FORWARD.test(reg)) {
    // support ??
    const r = new RegExp(reg.replace('??', '\\?\\?'), 'i');
    const matched = r.test(url);
    if (matched) {
      return UrlType.REG;
    }
  } else {
    const matched = url.indexOf(reg) > -1;
    if (matched) {
      return UrlType.STRING;
    }
  }
  return false;
};

class Forward {
  private _lastRequestId: string | null = null;
  private _disabled: Enabled = Enabled.YES;
  private _config: IFowardConfig = {};
  private _originRequest: Map<string, string> = new Map();
  private _originRequestHeaders: Map<string, string> = new Map();
  private _urls: string[] = new Array(200); // for cache

  get urls(): string[] {
    return this._urls;
  }

  get disabled(): Enabled {
    return this._disabled;
  }

  set disabled(newValue: Enabled) {
    this._disabled = newValue;
  }
  get config(): IFowardConfig {
    return this._config;
  }
  set config(newValue: IFowardConfig) {
    this._config = { ...newValue };
  }

  // Breaking the CORS Limitation
  onHeadersReceivedCallback(
    details: chrome.webRequest.WebResponseHeadersDetails,
    cors: boolean = true
  ): chrome.webRequest.BlockingResponse {
    // has cors rules
    const corsMap: string[] = this.config.cors!;
    let corsMatched: boolean = false;

    if (corsMap && corsMap.length) {
      corsMap.forEach((rule) => {
        if (matchUrl(details.url, rule)) {
          corsMatched = true;
        }
      });
    }

    const disabled: boolean =
      this.disabled === Enabled.NO || !cors || !corsMatched;

    if (disabled) {
      return {};
    }

    const originUrl: string = details.url;
    let resHeaders: chrome.webRequest.HttpHeader[] = [];
    let CORSOrigin: string =
      (this._originRequest.get(details.requestId)
        ? this._originRequest.get(details.requestId)
        : details.initiator) || DEFAULT_CORS_ORIGIN;

    if (details.responseHeaders && details.responseHeaders.filter) {
      let hasCredentials: boolean | string = false;
      let tempOrigin: string = EMPTY_STRING;
      resHeaders = details.responseHeaders.filter((responseHeader) => {
        // Already has access-control-allow-origin headers
        if (CORS.ORIGIN === responseHeader.name.toLowerCase()) {
          tempOrigin = responseHeader.value!;
        }

        if (CORS.CREDENTIALS === responseHeader.name.toLowerCase()) {
          hasCredentials = responseHeader.value!;
        }

        if (
          [CORS.ORIGIN, CORS.CREDENTIALS, CORS.METHODS, CORS.HEADERS].indexOf(
            responseHeader.name.toLowerCase()
          ) < 0
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
      CORSOrigin === DEFAULT_CORS_ORIGIN &&
      this._originRequest.get(details.requestId) === NULL_STRING
    ) {
      CORSOrigin = DEFAULT_CORS_ORIGIN;
    }

    resHeaders.push({
      name: CORS.ORIGIN,
      value: CORSOrigin,
    });
    resHeaders.push({
      name: CORS.CREDENTIALS,
      value: DEFAULT_CORS_CREDENTIALS,
    });
    resHeaders.push({
      name: CORS.METHODS,
      value: DEFAULT_CORS_METHODS,
    });

    let CORSHeader: string = EMPTY_STRING;

    if (this._originRequestHeaders.get(details.requestId)) {
      CORSHeader = ',' + this._originRequestHeaders.get(details.requestId);
    }

    resHeaders.push({
      name: CORS.HEADERS,
      value: DEFAULT_CREDENTIALS_RESPONSE_HEADERS + CORSHeader,
    });

    return {
      responseHeaders: resHeaders,
    };
  }

  redirectToMatchingRule(
    details: chrome.webRequest.WebRequestHeadersDetails
  ): chrome.webRequest.BlockingResponse {
    const rules = this.config.proxy;
    let redirectUrl: string = details.url;

    // in case of chrome-extension downtime
    if (!rules || !rules.length || REG.CHROME_EXTENSION.test(redirectUrl)) {
      return {};
    }

    if (
      /http(s?):\/\/.*\.(js|css|json|jsonp)/.test(redirectUrl) &&
      this._urls.indexOf(redirectUrl) < 0
    ) {
      this._urls.shift();
      this._urls.push(redirectUrl);
    }

    try {
      for (let i: number = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule && rule[0] && typeof rule[1] === 'string') {
          const reg = rule[0];
          const matched = matchUrl(redirectUrl, reg);

          if (details.requestId !== this._lastRequestId) {
            if (matched === UrlType.REG) {
              const r = new RegExp(reg.replace('??', '\\?\\?'), 'i');
              redirectUrl = redirectUrl.replace(r, rule[1]);
            } else if (matched === UrlType.STRING) {
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

  onBeforeSendHeadersCallback(
    details: chrome.webRequest.WebRequestHeadersDetails
  ): chrome.webRequest.BlockingResponse {
    const headers: string[] = [];
    for (let i: number = 0; i < details.requestHeaders!.length; ++i) {
      const requestName = details.requestHeaders![i].name.toLowerCase();
      if (requestName === ORIGIN) {
        this._originRequest.set(
          details.requestId,
          details.requestHeaders![i].value!
        );
      } else if (requestName === ACCESS_CONTROL_REQUEST_HEADERS || REG.X_HEADER.test(requestName)) {
        headers.push(requestName);
      }
    }
    if (headers.length) {
      this._originRequestHeaders.set(details.requestId, headers.join(','));
    }
    return { requestHeaders: details.requestHeaders };
  }

  onBeforeRequestCallback(
    details: chrome.webRequest.WebRequestHeadersDetails
  ): chrome.webRequest.BlockingResponse {
    return this.redirectToMatchingRule(details);
  }
}

if (!window._forward) {
  window._forward = new Forward();
}

export default window._forward;
