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
  Table,
  message,
} from 'antd';
import './xswitch.less';
import { flattenArray } from '../../utils.ts';
import { adjustMultilineComment } from '../../astutils.ts';

const esprima = require('esprima');
const escodegen = require('escodegen');
const estraverse = require('estraverse');

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
  BUILD_AST_DECLARATION_PREFIX,
} from '../../constants';
import { Enabled, EditModeEnum } from '../../enums';
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
    Table,
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
  editMode: EditModeEnum = EditModeEnum.EDITOR; // editor | form

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

  @observable.shallow
  currentEditingRowItemIndexes: any = { pattern: [], target: [] };

  async $init() {
    this.checked = (await getChecked()) !== Enabled.NO;
  }

  async $destroy() {
    await this.saveProxyRulesInternally();
  }

  async initEditorConfig() {
    const editingConfigKey: string = await getEditingConfigKey();
    this.editingKey = editingConfigKey;
    this.items = Array.from(await getConfigItems());
    removeUnusedItems();
  }

  async initMonacoEditor() {
    const editingConfigKey: string = await getEditingConfigKey();
    this.editingKey = editingConfigKey;
    this.items = Array.from(await getConfigItems());
    removeUnusedItems();
    const config: any = await getConfig(this.editingKey);

    window.require.config({ paths: { vs: MONACO_VS_PATH } });
    let monacoReady: boolean = true;

    window.require([MONACO_CONTRIBUTION_PATH], () => {
      editor = window.monaco.editor.create(
        this.$refs.shell,
        getEditorConfig(config)
      );

      saveConfig(editor.getValue(), this.editingKey);

      // load his edit mode
      const [ lastEditItem ] = this.items.filter((item: any) => {
        return item.id === this.editingKey;
      });
  
      if (lastEditItem) {
        this.editMode = lastEditItem.editMode;
        if (this.editMode === EditModeEnum.FORM) {
          this.loadEditorRulesIntoForm();
        }
      }

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
            self.switchEditMode();
            e.preventDefault();
          }
        },
        false
      );
    }
    initHotKeyBindings();
  }

  async $didMount() {
    await this.initMonacoEditor();
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

  swapProxyRule(from: number, to: number) {
    const tmp = this.proxyRules[to];
    this.proxyRules[to] = this.proxyRules[from];
    this.proxyRules[from] = tmp;
  }

  moveUpProxyRule(index: number) {
    if (index > 0) {
      this.swapProxyRule(index - 1, index);
    }
  }

  moveDownProxyRule(index: number) {
    if (index < this.proxyRules.length - 1) {
      this.swapProxyRule(index, index + 1);
    }
  }

  removeProxyRule(index: number) {
    this.proxyRules.splice(index, 1);
    message.success('Proxy rule has been removed successfully');
  }

  showErrorMessage(msg: string) {
    message.error(msg);
  } 

  switchProxyRuleRowItemEditMode(index: number, type: string) {
    if (this.currentEditingRowItemIndexes[type].includes(index)) {
      this.currentEditingRowItemIndexes[type].splice(this.currentEditingRowItemIndexes[type].indexOf(index));
    } else {
      this.currentEditingRowItemIndexes[type].push(index);
    }
  }

  async addNewProxyRule(ev: any) {
    // precheck
    if (this.newProxyPattern.trim() === '') {
      message.error('Proxy pattern is empty');
      return;
    }

    if (this.newProxyTarget.trim() === '') {
      message.error('Proxy target is empty');
      return;
    }

    this.proxyRules.push([
      this.newProxyPattern,
      this.newProxyTarget,
    ]);

    this.newProxyPattern = '';
    this.newProxyTarget = '';

    await this.loadFormRulesIntoEditor();
    setTimeout(() => {
      this.$refs.proxyPattern.focus();
    }, 200);
  }

  async addNewCors(ev: any) {
    // precheck
    if (this.newCors.trim() === '') {
      message.error('CORS pattern is empty');
      return;
    }
    this.corsItems = Array.from(new Set([...this.corsItems, this.newCors]));
    this.newCors = '';

    await this.loadFormRulesIntoEditor();
  }

  async addNewEnable(ev: any) {
    // precheck
    if (this.newEnable.trim() === '') {
      message.error('Enable pattern is empty');
      return;
    }
    this.enableItems = Array.from(new Set([...this.enableItems, this.newEnable]));
    this.newEnable = '';

    await this.loadFormRulesIntoEditor();
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

  async setEditModeForTargetItemAsync() {
    const [ lastEditItem ] = this.items.filter((item: any) => {
      return item.id === this.editingKey;
    });
    
    if (lastEditItem) {
      lastEditItem.editMode = this.editMode;
      await setConfigItems(this.items);
    }
  }

  async setEditingKeyHandler(id: string) {
    const [ currentEditConfigItem ] = this.items.filter((item: any) => {
      return item.id === id;
    });

    await this.setEditModeForTargetItemAsync();

    this.editingKey = id;
    if (currentEditConfigItem) {
      this.editMode = currentEditConfigItem.editMode || EditModeEnum.EDITOR;
    }

    const config: any = await getConfig(this.editingKey);
    this.setEditorValue(config || DEFAULT_DUP_DATA);
    setEditingConfigKey(this.editingKey);
    
    if (this.editMode === EditModeEnum.FORM) {
      this.loadEditorRulesIntoForm();
    } else {
      await this.formatCode();
    }
    this.saveCurrentEditModeToStorage(this.editMode);
  }

  async setEditingKey(event: EventTarget, ctx: any) {
    await this.setEditingKeyHandler(ctx.item.id);
  }

  setActive(event: EventTarget, ctx: any) {
    ctx.item.active = !ctx.item.active;
    setConfigItems(this.items);
  }

  async formatCode() {
    await editor.getAction(FORMAT_DOCUMENT_CMD).run();
  }

  isCurrentRuleValid() {
    if (this.editMode === EditModeEnum.EDITOR) {
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

  copyProxyRule(index: number) {
    const originalRule = [...this.proxyRules[index]];
    this.proxyRules.splice(index, 0, originalRule);
    message.success('Proxy rule has been copied successfully');
  }

  loadEditorRulesIntoForm() {
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
  }

  async syncRulesForBothModes() {
    if (this.editMode === EditModeEnum.EDITOR) {
      this.loadEditorRulesIntoForm();
    } else {
      await this.loadFormRulesIntoEditor();
    }
  }

  async saveProxyRulesInternally() {
    const newRules: any = {
      proxy: this.proxyRules.map(item => {
        return item.map((rule: string) => {
          return rule.replace(/\r|\n/gm, '');
        })
      }),
      cors: this.corsItems.length ? this.corsItems : undefined,
      enable: this.enableItems.length ? this.enableItems : undefined,
    };

    // we should diff two trees to maintain the comments area before synchronizing rules into monaco editor
    // oldAst remains the line information for comments
    const oldAst = esprima.parseScript(
      `${BUILD_AST_DECLARATION_PREFIX}${editor.getValue()}`, 
      { tokens: true, comment: true, loc: true, range: true },
    );

    // 1. we need to format code to get exact lines for each tokens
    editor.setValue(JSON.stringify(newRules));
    await this.formatCode();

    const commentEntities: any[] = [];
    const oldComments = oldAst.comments;
    
    // 2. then we need to set new rules into editor and format it
    let linedTokens: any[] = [];
    let newAst = esprima.parse(
        `${BUILD_AST_DECLARATION_PREFIX}${editor.getValue()}`, 
        { tokens: true, comment: true, loc: true, range: true },
      );

      newAst.tokens.forEach((t: any) => {
        const {
          loc: {
            start,
          },
        } = t;
        if (!linedTokens[start.line]) {
          linedTokens[start.line] = [];
        }
        linedTokens[start.line].push(t);
      });

      function getCommentLineNumberByLoc(loc: any, insertedCount: number) {
        let lineNumber = loc.start.line;
        const checkLineLastTokenHasComments = (tokens: any[]) => {
          if (!tokens) return false;
          const l = tokens.length;
          if (l > 0) {
            const lastToken = tokens[l - 1];
            return tokens.length && lastToken && lastToken.trailingComments && lastToken.trailingComments.length;
          } else {
            return false;
          }
        };
        while (checkLineLastTokenHasComments(linedTokens[lineNumber])) {
          lineNumber++;
        };
        return lineNumber;
      }

      const maxEndColumnTokens: any[] = [];

      oldComments.forEach((c: any, index: number) => {
        const {
          value,
          loc,
        } = c;
        // loc.start.line which indicates the original comment's position

        let maxEndColumnToken: any;
        let lineNumber = getCommentLineNumberByLoc(loc, index);

        // const sameLineTokens = (linedTokens[lineNumber] || []);

        // console.log('sameLineTokens of comment', value, c, loc.start.line, sameLineTokens);
        // if (!sameLineTokens.length) {
        //   // find previous line
        //   lineNumber = getCommentLineNumberByLoc(loc, index);
        //   while (lineNumber > 0 && !linedTokens[--lineNumber]);
        //   if (lineNumber === 0) {
        //     // add leading comments into ast
        //   } else {
        //     const prevLineTokens = linedTokens[lineNumber];
        //     maxEndColumnToken = prevLineTokens[prevLineTokens.length - 1];
        //     console.log('add in previous line after', maxEndColumnToken);
        //   }
        // } else {
        //   if (sameLineTokens.length === 1) {
        //     if (loc.start.column < sameLineTokens[0].loc.end.column) {
        //       lineNumber = getCommentLineNumberByLoc(loc, index);
        //       while (lineNumber > 0 && !linedTokens[--lineNumber]);
        //       if (lineNumber === 0) {
        //         // add leading comments into AST
        //       } else {
        //         const prevLineTokens = linedTokens[lineNumber];
        //         maxEndColumnToken = prevLineTokens[prevLineTokens.length - 1];
        //         console.log('add in previous line after', maxEndColumnToken);
        //       }
        //     } else {
        //       maxEndColumnToken = sameLineTokens[0];
        //     }
        //   } else {
        //     const firstLineToken = sameLineTokens[0];
        //     if (loc.end.column > firstLineToken.loc.start.column && loc.end.column < firstLineToken.loc.end.column) {
        //       while (lineNumber > 0 && !linedTokens[--lineNumber]);
        //       if (lineNumber === 0) {
        //         // add leading comments into AST
        //       } else {
        //         const prevLineTokens = linedTokens[lineNumber];
        //         maxEndColumnToken = prevLineTokens[prevLineTokens.length - 1];
        //         console.log('add in previous line after', maxEndColumnToken);
        //       }
        //     } else {
        //       const i = sameLineTokens.length - 1;
        //       maxEndColumnToken = sameLineTokens[i];
        //       console.log('add in current line after', maxEndColumnToken);
        //     }
        //   }
        // }
        // console.log(`comment ${JSON.stringify(c)} found target token at line ${lineNumber}, after token`, maxEndColumnToken);

        maxEndColumnTokens.push({
          lineNumber,
          // position: lineNumber - getCommentLineNumberByLoc(loc, index) === 0 ? 'current' : 'prev',
          // tokenValue: maxEndColumnToken.value,
          // lineTokens: linedTokens[lineNumber],
          // comment: c,
          type: c.type,
          value: c.value,
          // token: maxEndColumnToken,
        });
      });

      maxEndColumnTokens.forEach((targetTokenInfo: any) => {
        const {
          type,
          value,
          lineNumber,
        } = targetTokenInfo;
        const commentWithLineNumber = {
          value,
          type,
          lineNumber,
        };
        commentEntities.push({
          ...commentWithLineNumber,
        });
      });

    const targetCodes = escodegen.generate(newAst, {
      comment: true,
    })
    .replace(/\'(.*?)\'(\:|\,*)/gm, function(source: string, $1: any, $2: any) {
      return '\"' + $1 + '\"' + $2;
    });
    // console.log('target AST', commentEntities, newAst);
    editor.setValue(targetCodes.slice(BUILD_AST_DECLARATION_PREFIX.length, targetCodes.length - 1 ));
    await this.formatCode();

    // 3. append comments into new editor values based on previous calculated line infomation
    setTimeout(async () => {
      const tempValue = editor.getValue();
      const lines = tempValue.split(/\n/);
      commentEntities.forEach((c: any, index: number) => {
        const { lineNumber, type, value } = c;
        let lineIndex = lineNumber - 1;;
        let comment;
        if (type === 'Line') {
          comment = `//${value}`;
        } else {
          if (/[\r\n]/.test(value)) {
            // comment = adjustMultilineComment(`/*${value}*/`);
            const multiLineComments = value.split(/[\r\n]/g);
            multiLineComments.forEach((cv: string, cIndex: number) => {
              comment = `${cv}`;
              const blockCommentStartIndex = Math.max(0, lineIndex + cIndex);
              if (cIndex === 0) {
                comment = `/*${comment}`;
              }

              if (cIndex === multiLineComments.length - 1) {
                comment += '*/';
              }

              lines.splice(blockCommentStartIndex, 0, comment)

            });
            return;
          } else {
            comment = `/*${value}*/`;
            lines[lineIndex] += comment;
            return;
          }
        }

        if (lines[lineIndex]) {
          lines[lineIndex] += comment;
        } else {
          lines[lineIndex] = [];
          lines[lineIndex].push(comment);
        }
      });

      // 4. we can happily reset the editor value eventually
      editor.setValue(lines.join('\n'));
      await this.formatCode();
      await this.setEditModeForTargetItemAsync();
    }, 200);
  }

  async loadFormRulesIntoEditor() {
    await this.saveProxyRulesInternally();
    await this.formatCode();

    this.newProxyPattern = '';
    this.newProxyTarget = '';
    this.newCors = '';
    this.newEnable = '';
  }

  async switchEditMode() {
    if (!this.isCurrentRuleValid()) {
      message.error('Please check your rules');
      return;
    }

    await this.syncRulesForBothModes();

    if (this.editMode === EditModeEnum.EDITOR) {
      this.editMode = EditModeEnum.FORM;
    } else {
      this.editMode = EditModeEnum.EDITOR;
      this.currentEditingRowItemIndexes = {
        pattern: [],
        target: [],
      };
    }

    await this.saveCurrentEditModeToStorage(this.editMode);
  }

  async saveCurrentEditModeToStorage(editMode: EditModeEnum) {
    this.editMode = editMode;
    await this.setEditModeForTargetItemAsync();
  }

  hideForm() {    
    this.saveCurrentEditModeToStorage(EditModeEnum.EDITOR);
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
      editMode: EditModeEnum.EDITOR,
    });
    setConfigItems(this.items);
    this.editingKey = id;
    
    await this.saveCurrentEditModeToStorage(EditModeEnum.EDITOR);
    
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
      await this.setEditingKeyHandler(this.items[i-1].id);
    }
    setConfigItems(this.items);
  }
}
