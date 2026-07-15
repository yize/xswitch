// Manifest V3 类型声明
declare namespace chrome {
  namespace declarativeNetRequest {
    interface Rule {
      id: number;
      priority?: number;
      action: RuleAction;
      condition: RuleCondition;
    }

    interface RuleAction {
      type: string;
      redirect?: {
        url?: string;
        regexSubstitution?: string;
      };
      responseHeaders?: Array<{
        header: string;
        operation: "set" | "remove";
        value?: string;
      }>;
    }

    interface RuleCondition {
      urlFilter?: string;
      regexFilter?: string;
      resourceTypes: string[];
    }

    function updateDynamicRules(options: {
      addRules?: Rule[];
      removeRuleIds?: number[];
    }): Promise<void>;
  }

  namespace action {
    function setBadgeText(details: { text: string }): Promise<void>;
    function setBadgeBackgroundColor(details: { color: string }): Promise<void>;
    function setIcon(details: { path: string }): Promise<void>;
  }

  namespace storage {
    const sync: {
      get(keys: any, callback: (result: any) => void): void;
      set(items: any, callback?: () => void): void;
    };
    const local: {
      get(keys: any, callback: (result: any) => void): void;
      set(items: any, callback?: () => void): void;
    };
    const onChanged: {
      addListener(callback: (changes: any) => void): void;
    };
  }

  namespace browsingData {
    function removeCache(options: { since: number }): Promise<void>;
  }

  namespace runtime {
    function sendMessage(
      message: any,
      callback?: (response: any) => void
    ): void;
    const lastError: any;
    const onInstalled: {
      addListener(callback: (details: any) => void): void;
    };
    const onMessage: {
      addListener(
        callback: (request: any, sender: any, sendResponse: any) => void
      ): void;
    };
  }

  namespace tabs {
    function create(options: any): Promise<any>;
  }

  namespace extension {
    function getBackgroundPage(): any;
  }

  namespace webRequest {
    interface WebRequestHeadersDetails {
      requestId: string;
      url: string;
      requestHeaders?: HttpHeader[];
    }

    interface WebResponseHeadersDetails {
      requestId: string;
      url: string;
      responseHeaders?: HttpHeader[];
      initiator?: string;
    }

    interface HttpHeader {
      name: string;
      value?: string;
    }

    interface BlockingResponse {
      requestHeaders?: HttpHeader[];
      responseHeaders?: HttpHeader[];
      redirectUrl?: string;
    }
  }
}
