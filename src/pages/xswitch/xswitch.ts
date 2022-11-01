import { ViewController, observable, inject } from '@ali/recore';
import { Switch, Icon, Checkbox, Input, Popconfirm, Button, message } from 'antd';

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
  removeUnusedItems,
} from '../../chrome-storage';
import { getEditorConfig } from '../../editor-config';

let editor: any;
@inject({
  components: { Switch, Icon, Checkbox, Input, Popconfirm, Button, message },
})
export default class XSwitch extends ViewController {
  @observable
  checked = true;

  @observable
  editingKey = '0';

  @observable
  dragoverKey: string;

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

  dragStart(ev: DragEvent) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer!.setData('application/my-app', ev.target!.id);
    ev.dataTransfer!.effectAllowed = 'move';
  }

  dragOver(ev: DragEvent) {
    ev.preventDefault();
    this.dragoverKey = (ev.target as HTMLElement).closest('li')!.id;
    ev.dataTransfer!.dropEffect = 'move';
  }

  drop(ev: DragEvent) {
    ev.preventDefault();
    const id = ev.dataTransfer!.getData('application/my-app');
    const targetId = (ev.target as HTMLElement).closest('li')!.id;
    this.dragoverKey = '';
    this.swapItem(id, targetId);
  }

  swapItem(srcItemId: string, destItemId: string) {
    let srcItemIdx;
    let destItemIdx;
    let srcItem;
    let destItem;
    this.items.forEach((item: any, idx: number) => {
      if (item.id === srcItemId) {
        srcItemIdx = idx;
        srcItem = item;
      }
      if (item.id === destItemId) {
        destItemIdx = idx;
        destItem = item;
      }
    });

    if (!srcItem || !destItem) {
      console.warn('srcItem or destItem is undefined, swap aborted.')
      return;
    }

    this.items[srcItemIdx] = destItem;
    this.items[destItemIdx] = srcItem;
    setConfigItems(this.items);
  }

  async setEditingKeyHandler(id: string) {
    this.editingKey = id;
    const config: any = await getConfig(this.editingKey);
    this.setEditorValue(config || DEFAULT_DUP_DATA);
    setEditingConfigKey(this.editingKey);
  }

  async setEditingKey(event: EventTarget, ctx: any) {
    await this.setEditingKeyHandler(ctx.item.id);
  }

  setActive(event: EventTarget, ctx: any) {
    ctx.item.active = !ctx.item.active;
    setConfigItems(this.items);
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
