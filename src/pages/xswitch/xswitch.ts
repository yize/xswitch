import { ViewController, observable, inject } from '@ali/recore';
import { Switch, Icon } from 'antd';

import './xswitch.less';

import {
  ANYTHING,
  FORMAT_DOCUMENT_CMD,
  KEY_CODE_S,
  KEY_DOWN,
  LANGUAGE_JSON,
  MONACO_CONTRIBUTION_PATH,
  MONACO_VS_PATH,
  PLATFORM_MAC,
  RULE,
  RULE_COMPLETION,
  JSONC_STORAGE_KEY,
  POPUP_HTML_PATH,
  HELP_URL,
} from '../../constants';
import { BadgeText, Enabled } from '../../enums';
import {
  getConfig,
  saveConfig,
  setChecked,
  getChecked,
} from '../../chrome-storage';
import { getEditorConfig } from '../../editor-config';

@inject({
  components: { Switch, Icon },
})
export default class XSwitch extends ViewController {
  @observable
  checked = true;

  async $init() {
    this.checked = (await getChecked()) !== Enabled.NO;
  }

  async $didMount() {
    window.require.config({ paths: { vs: MONACO_VS_PATH } });

    const result: any = await getConfig();
    let monacoReady: boolean = true;
    let editor: any;

    window.require([MONACO_CONTRIBUTION_PATH], () => {
      editor = window.monaco.editor.create(
        this.$refs.shell,
        getEditorConfig(result[JSONC_STORAGE_KEY])
      );

      saveConfig(editor.getValue());

      window.monaco.languages.registerCompletionItemProvider(LANGUAGE_JSON, {
        provideCompletionItems: () => {
          const textArr: any[] = [];
          chrome.extension
            .getBackgroundPage()!
            ._forward.urls.forEach((item: any) => {
              if (item) {
                textArr.push({
                  label: item,
                  kind: window.monaco.languages.CompletionItemKind.Text,
                });
              }
            });

          const extraItems = [
            {
              label: RULE,
              kind: window.monaco.languages.CompletionItemKind.Method,
              insertText: {
                value: RULE_COMPLETION,
              },
            },
          ];
          return [...textArr, ...extraItems];
        },
      });

      editor.onDidChangeModelContent(() => {
        saveConfig(editor.getValue());
      });

      editor.onDidScrollChange(() => {
        if (monacoReady) {
          editor.trigger(ANYTHING, FORMAT_DOCUMENT_CMD);
          monacoReady = false;
        }
      });
    });

    function preventSave() {
      document.addEventListener(
        KEY_DOWN,
        (e) => {
          const controlKeyDown = navigator.platform.match(PLATFORM_MAC)
            ? e.metaKey
            : e.ctrlKey;
          if (e.keyCode === KEY_CODE_S && controlKeyDown) {
            e.preventDefault();
          }
        },
        false
      );
    }
    preventSave();
  }

  toggleButton() {
    this.checked = !this.checked;
    setChecked(this.checked);
  }

  openNewTab() {
    chrome.tabs.create(
      { url: chrome.extension.getURL(POPUP_HTML_PATH) },
      (tab) => {
        // Tab opened.
      }
    );
  }
  openReadme() {
    chrome.tabs.create({ url: HELP_URL }, (tab) => {
      // Tab opened.
    });
  }
}
