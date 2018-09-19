import { ViewController, observable } from '@ali/recore';
import './xswitch.css';
import {
  ANYTHING,
  CLICK,
  CONTAINER_DOM_ID,
  DEFAULT_DATA,
  DEFAULT_FONT_FAMILY,
  DISABLED_STORAGE_KEY,
  FORMAT_DOCUMENT_CMD,
  HELP_URL,
  JSON_STORAGE_KEY,
  JSONC_STORAGE_KEY,
  KEY_CODE_S,
  KEY_DOWN,
  LANGUAGE_JSON,
  MONACO_CONTRIBUTION_PATH,
  MONACO_VS_PATH,
  NEW_TAB_DOM_ID,
  OPACITY_VISIBLE,
  OPEN_README_DOM_ID,
  PLATFORM_MAC,
  POPUP_HTML_PATH,
  RULE,
  RULE_COMPLETION,
  SHOW_FOLDING_CONTROLS,
  SWITCH_AREA_DOM_ID,
  SWITCH_CHECKED_CLASSNAME,
  SWITCH_DOM_ID,
  SWITCH_INNER_DOM_ID
} from '../../constants';
import { BadgeText, Enabled } from '../../enums';
import { JSONC2JSON } from '../../utils';
import { getConfig, saveConfig } from '../../chrome-storage';

function preventSave() {
  document.addEventListener(
    KEY_DOWN,
    e => {
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


export default class XSwitch extends ViewController {
  @observable on = false;
  @observable checked = false;
  @observable get checkedLabel() {
    return this.checked ? 'ON' : 'OFF';
  }

  async $didMount() {

    window.require.config({ paths: { vs: MONACO_VS_PATH } });
    const result: any = await getConfig();
    let monacoReady: boolean = true;
    let editor: any;

    window.require([MONACO_CONTRIBUTION_PATH], () => {
      editor = window.monaco.editor.create(
        this.$refs.shell,
        {
          value: result[JSONC_STORAGE_KEY] || DEFAULT_DATA,
          language: LANGUAGE_JSON,

          minimap: {
            enabled: false
          },
          fontFamily: DEFAULT_FONT_FAMILY,
          fontSize: 13,
          fontLigatures: true,

          contextmenu: false,
          scrollBeyondLastLine: false,
          folding: true,
          showFoldingControls: SHOW_FOLDING_CONTROLS,

          useTabStops: true,
          wordBasedSuggestions: true,
          quickSuggestions: true,
          suggestOnTriggerCharacters: true
        }
      );

      saveConfig(editor.getValue());

      window.monaco.languages.registerCompletionItemProvider(LANGUAGE_JSON, {
        provideCompletionItems: () => {
          const textArr: any[] = [];
          chrome.extension.getBackgroundPage()!._forward.urls.forEach((item: any) => {
            if (item) {
              textArr.push({
                label: item,
                kind: window.monaco.languages.CompletionItemKind.Text
              });
            }
          });

          const extraItems = [
            {
              label: RULE,
              kind: window.monaco.languages.CompletionItemKind.Method,
              insertText: {
                value: RULE_COMPLETION
              }
            }
          ];
          return [...textArr, ...extraItems];
        }
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
    preventSave();
  }


  toggleButton() {
    this.checked = !this.checked;
  }
}