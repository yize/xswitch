import { ViewController, observable, inject } from '@ali/recore';
import { Switch, Icon, Checkbox, Input, Popconfirm } from 'antd';

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
  POPUP_HTML_PATH,
  HELP_URL,
  DEFAULT_DUP_DATA,
} from '../../constants';
import { Enabled } from '../../enums';
import {
  getConfig,
  saveConfig,
  setChecked,
  getChecked,
  openLink,
  getEditingConfigKey,
  setEditingConfigKey,
  setConfigItems,
  getConfigItems,
} from '../../chrome-storage';
import { getEditorConfig } from '../../editor-config';

let editor: any;
@inject({
  components: { Switch, Icon, Checkbox, Input, Popconfirm },
})
export default class XSwitch extends ViewController {
  @observable
  checked = true;

  @observable
  editingKey = '0';

  @observable
  newItem = '';

  @observable
  items: any = [];

  async $init() {
    this.checked = (await getChecked()) !== Enabled.NO;
  }

  async $didMount() {
    window.require.config({ paths: { vs: MONACO_VS_PATH } });
    const editingConfigKey: string = await getEditingConfigKey();
    this.editingKey = editingConfigKey;
    const config: any = await getConfig(editingConfigKey);
    this.items = await getConfigItems();

    let monacoReady: boolean = true;

    window.require([MONACO_CONTRIBUTION_PATH], () => {
      editor = window.monaco.editor.create(
        this.$refs.shell,
        getEditorConfig(config)
      );

      saveConfig(editor.getValue(), this.editingKey);

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
        saveConfig(editor.getValue(), this.editingKey);
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

  setEditorValue(value: string) {
    editor.setValue(value);
  }

  toggleButton() {
    this.checked = !this.checked;
    setChecked(this.checked);
  }

  openNewTab() {
    openLink(POPUP_HTML_PATH, true);
  }
  openReadme() {
    openLink(HELP_URL);
  }

  async setEditingKey(ctx: any) {
    this.editingKey = ctx.scope.item.id;
    const config: any = await getConfig(this.editingKey);
    this.setEditorValue(config || DEFAULT_DUP_DATA);
    setEditingConfigKey(this.editingKey);
  }

  setActive(ctx: any) {
    ctx.scope.item.active = !ctx.scope.item.active;
    setConfigItems(this.items);
  }

  add() {
    if (this.newItem) {
      this.items.push({
        id: new Date().getTime(),
        name: this.newItem,
        active: true,
      });
    }
    setConfigItems(this.items);
    this.newItem = '';
  }

  remove(ctx: any) {
    const i = this.items.indexOf(ctx.scope.item);
    if (i > -1) {
      this.items.splice(i, 1);
    }
    setConfigItems(this.items);
  }
}
