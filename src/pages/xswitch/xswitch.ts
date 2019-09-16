import { ViewController, observable, inject } from '@ali/recore';
import {
  Switch,
  Icon,
  Tooltip,
  Checkbox,
  Tag,
  Input,
  Popconfirm,
  Collapse,
  Button,
  Badge,
  Row,
  Col,
  message,
} from 'antd';
import './xswitch.less';

import {
  ANYTHING,
  FORMAT_DOCUMENT_CMD,
  KEY_CODE_S,
  KEY_CODE_M,
  KEY_PRESSE,
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
  removeUnusedItems,
} from '../../chrome-storage';
import { getEditorConfig } from '../../editor-config';
import { JSONC2JSON } from '../../utils';

let editor: any;
@inject({
  components: {
    Switch,
    Icon,
    Tooltip,
    Checkbox,
    Input,
    Tag,
    Popconfirm,
    Button,
    Collapse,
    Badge,
    Row,
    Col,
    message,
  },
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

  @observable
  editMode: string = 'editor'; // editor / form

  @observable
  newCors = '';

  @observable
  newEnable = '';

  @observable
  newProxyPattern = '';
  
  @observable
  newProxyTarget = '';

  @observable.shallow
  proxyRules: string[][] = [];

  @observable.shallow
  corsItems: string[] = [];

  @observable.shallow
  enableItems: string[] = [];

  async $init() {
    this.checked = (await getChecked()) !== Enabled.NO;
  }

  async $didMount() {
    window.require.config({ paths: { vs: MONACO_VS_PATH } });
    const editingConfigKey: string = await getEditingConfigKey();
    this.editingKey = editingConfigKey;
    const config: any = await getConfig(editingConfigKey);
    this.items = Array.from(await getConfigItems());
    await removeUnusedItems()

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

    const self = this;
    function initHotKeyBindings() {
      document.addEventListener(
        KEY_DOWN,
        (e) => {
          const controlKeyDown = navigator.platform.match(PLATFORM_MAC)
            ? e.metaKey
            : e.ctrlKey;
          if (e.keyCode === KEY_CODE_S && controlKeyDown) {
            e.preventDefault();
          }

          if (e.keyCode === KEY_CODE_M && e.altKey && e.shiftKey) {
            self.switchMode();
            e.preventDefault();
          }
        },
        false
      );
    }
    initHotKeyBindings();
  }

  removeCors(ev: EventTarget, ctx: any) {
    ev.preventDefault();
    const idx: number = this.corsItems.indexOf(ctx.item);
    if (idx > -1) {
      this.corsItems.splice(idx, 1);
    }
  }

  removeEnable(ev: EventTarget, ctx: any) {
    ev.preventDefault();
    const idx: number = this.enableItems.indexOf(ctx.item);
    if (idx > -1) {
      this.enableItems.splice(idx, 1);
    }
  }

  removeProxyRule(index: number) {
    this.proxyRules.splice(index, 1);
  }

  addNewProxyRule(ev: any) {
    // precheck
    if (this.newProxyPattern.trim() === '') {
      message.error('Proxy pattern is invalid');
      return;
    }

    if (this.newProxyTarget.trim() === '') {
      message.error('Proxy target is invalid');
      return;
    }

    this.proxyRules.push([
      this.newProxyPattern,
      this.newProxyTarget,
    ]);

    this.newProxyPattern = '';
    this.newProxyTarget = '';

    this.$refs.proxyPattern.focus();
  }

  addNewCors(ev: any) {
    // precheck
    if (this.newCors.trim() === '') {
      message.error('CORS pattern is invalid');
      return;
    }
    this.corsItems = Array.from(new Set([...this.corsItems, this.newCors]));
    this.newCors = '';
  }

  addNewEnable(ev: any) {
    // precheck
    if (this.newEnable.trim() === '') {
      message.error('Enable pattern is invalid');
      return;
    }
    this.enableItems = Array.from(new Set([...this.enableItems, this.newEnable]));
    this.newEnable = '';
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

  async setEditingKeyHandler(id: string) {
    if (this.editMode === 'form') {
      if (!this.switchMode()) {
        return;
      }
    }

    this.editingKey = id;
    const config: any = await getConfig(this.editingKey);
    this.setEditorValue(config || DEFAULT_DUP_DATA);
    setEditingConfigKey(this.editingKey);
    
    this.formatCode();
  }

  async setEditingKey(event: EventTarget, ctx: any) {
    await this.setEditingKeyHandler(ctx.item.id);
  }

  setActive(event: EventTarget, ctx: any) {
    ctx.item.active = !ctx.item.active;
    setConfigItems(this.items);
  }

  formatCode() {
    editor.getAction('editor.action.formatDocument').run();
  }

  isCurrentRuleValid() {
    if (this.editMode === 'editor') {
      try {
        const rawCode: any = JSON.parse(JSONC2JSON(editor.getValue()));
        return true;
      } catch (e) {
        return false;
      }
    } else {
      return true;
    }
  }

  syncRulesForBothModes() {
    if (this.editMode === 'editor') {
      const rawCode: any = JSON.parse(JSONC2JSON(editor.getValue()));
      const {
        proxy,
        cors,
        enable,
      } = rawCode;

      if (proxy && proxy.length) {
        this.proxyRules = proxy;
      }

      if (cors && cors.length) {
        this.corsItems = cors;
      }

      if (enable && enable.length) {
        this.enableItems = enable;
      }
    } else {
      const newRules = {
        proxy: this.proxyRules,
        cors: this.corsItems,
        enable: this.enableItems,
      };
  
      editor.setValue(JSON.stringify(newRules));
      this.formatCode();
      
      message.info('Your changes have been saved');

      this.newProxyPattern = '';
      this.newProxyTarget = '';
      this.newCors = '';
      this.newEnable = '';
    }
  }

  switchMode() {
    if (!this.isCurrentRuleValid()) {
      message.error('Please check your rules');
      return false;
    }

    this.syncRulesForBothModes();

    if (this.editMode === 'editor') {
      this.editMode = 'form';
    } else {
      this.editMode = 'editor';
    }
    
    return true;
  }

  togglePanel(panelKey: string) {
    console.log('panelKey', panelKey);
  }

  async add() {
    if (this.newItem.trim() === '') {
      message.error('Rule name should not be an empty string!');
      return;
    }
    const id = '' + new Date().getTime();
    const self = this;
    this.items.push({
      id,
      name: this.newItem,
      active: true,
    });
    setConfigItems(this.items);
    this.editingKey = id;
    setEditingConfigKey(this.editingKey);
    await this.setEditingKeyHandler(id);
    setTimeout(function () {
      self.$refs.tabs.scrollTop = self.$refs.tabs.scrollHeight;
    }, 0)
    this.newItem = '';
  }

  async remove(ev: EventTarget, ctx: any) {
    ev.stopPropagation();
    const i = this.items.indexOf(ctx.item);
    if (i > -1) {
      this.items.splice(i, 1);
    }
    // i will not be 0
    if(this.items[i-1].hasOwnProperty('id')){
      this.editingKey = this.items[i-1].id;
      await this.setEditingKeyHandler(this.editingKey);
    }
    setConfigItems(this.items);
  }
}
