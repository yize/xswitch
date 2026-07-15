import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { Switch, Checkbox, Input, Popconfirm, Button, message } from "antd";
import {
  DeleteOutlined,
  QuestionCircleFilled,
  CodeFilled,
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  CheckCircleTwoTone,
  QuestionCircleTwoTone,
  CodeTwoTone,
  EditTwoTone,
} from "@ant-design/icons";
import "./xswitch.less";

// 全局类型声明
declare global {
  interface Window {
    require: any;
    monaco: any;
  }
  const chrome: any;
}

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
  JSONC_CONFIG,
} from "../../constants";
import { Enabled } from "../../enums";
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
} from "../../chrome-storage";
import { getEditorConfig } from "../../editor-config";

let editor: any;
let editingKey: string = "0";

const XSwitch: React.FC = () => {
  const [checked, setCheckedState] = useState(true);
  const [dragoverKey, setDragoverKey] = useState("");
  const [editKeyForUI, setEditKeyForUI] = useState("0");
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const shellRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    async function init() {
      setCheckedState((await getChecked()) !== Enabled.NO);
    }
    init();
  }, []);

  useEffect(() => {
    async function didMount() {
      if (typeof window.require === "undefined") {
        console.error("Monaco Editor loader not available");
        return;
      }
      window.require.config({ paths: { vs: MONACO_VS_PATH } });
      const editingConfigKey: string = await getEditingConfigKey();
      editingKey = editingConfigKey;
      setEditKeyForUI(editingConfigKey);
      const config: any = await getConfig(editingConfigKey);
      setItems(Array.from(await getConfigItems()));
      await removeUnusedItems();
      let monacoReady: boolean = true;
      window.require([MONACO_CONTRIBUTION_PATH], () => {
        editor = window.monaco.editor.create(
          shellRef.current,
          getEditorConfig(config?.[JSONC_CONFIG])
        );
        saveConfig(editor.getValue(), editingKey);

        window.monaco.languages.registerCompletionItemProvider(LANGUAGE_JSON, {
          provideCompletionItems: () => {
            const textArr: any[] = [];
            // 使用 chrome.runtime 替代 chrome.extension
            chrome.runtime.sendMessage({ action: "getUrls" }, (response) => {
              if (response && response.urls) {
                response.urls.forEach((item: any) => {
                  if (item) {
                    textArr.push({
                      label: item,
                      kind: window.monaco.languages.CompletionItemKind.Text,
                    });
                  }
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
          saveConfig(editor.getValue(), editingKey);
        });

        editor.onDidScrollChange(() => {
          if (monacoReady) {
            editor.trigger(ANYTHING, FORMAT_DOCUMENT_CMD);
            monacoReady = false;
          }
        });
      });

      // 禁止 Ctrl/Cmd + S 默认保存
      function preventSave(e: KeyboardEvent) {
        const controlKeyDown = navigator.platform.match(PLATFORM_MAC)
          ? e.metaKey
          : e.ctrlKey;
        if (e.keyCode === KEY_CODE_S && controlKeyDown) {
          e.preventDefault();
        }
      }
      document.addEventListener(KEY_DOWN, preventSave, false);
      return () => {
        document.removeEventListener(KEY_DOWN, preventSave, false);
      };
    }
    didMount();
  }, []);

  const setEditorValue = (value: string) => {
    if (editor) editor.setValue(value);
  };

  const handleToggle = () => {
    setChecked(!checked);
    setCheckedState(!checked);
  };

  const handleOpenNewTab = () => {
    openLink(POPUP_HTML_PATH, true);
  };

  const handleOpenReadme = () => {
    openLink(HELP_URL);
  };

  const handleDragStart = (ev: React.DragEvent<HTMLLIElement>, id: string) => {
    ev.dataTransfer.setData("application/my-app", id);
    ev.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (ev: React.DragEvent<HTMLLIElement>, id: string) => {
    ev.preventDefault();
    setDragoverKey(id);
    ev.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (ev: React.DragEvent<HTMLLIElement>, id: string) => {
    ev.preventDefault();
    const srcId = ev.dataTransfer.getData("application/my-app");
    setDragoverKey("");
    swapItem(srcId, id);
  };

  const swapItem = (srcItemId: string, destItemId: string) => {
    let srcItemIdx: number | undefined;
    let destItemIdx: number | undefined;
    let srcItem: any;
    let destItem: any;
    items.forEach((item: any, idx: number) => {
      if (item.id === srcItemId) {
        srcItemIdx = idx;
        srcItem = item;
      }
      if (item.id === destItemId) {
        destItemIdx = idx;
        destItem = item;
      }
    });
    if (
      !srcItem ||
      !destItem ||
      srcItemIdx === undefined ||
      destItemIdx === undefined
    ) {
      console.warn("srcItem or destItem is undefined, swap aborted.");
      return;
    }
    const newItems = [...items];
    newItems[srcItemIdx] = destItem;
    newItems[destItemIdx] = srcItem;
    setItems(newItems);
    setConfigItems(newItems);
  };

  const setEditingKeyHandler = async (id: string) => {
    editingKey = id;
    const config: any = await getConfig(id);
    setEditorValue(config?.[JSONC_CONFIG] || DEFAULT_DUP_DATA);
    setEditingConfigKey(id);
  };

  const handleSetEditingKey = async (id: string) => {
    setEditKeyForUI(id);
    await setEditingKeyHandler(id);
  };

  const handleSetActive = (idx: number) => {
    const newItems = [...items];
    newItems[idx].active = !newItems[idx].active;
    setItems(newItems);
    setConfigItems(newItems);
  };

  const handleAdd = async () => {
    if (newItem.trim() === "") {
      message.error("Rule name should not be an empty string!");
      return;
    }
    const id = "" + new Date().getTime();
    const newItems = [...items, { id, name: newItem, active: true }];
    setItems(newItems);
    setConfigItems(newItems);
    editingKey = id;
    setEditingConfigKey(id);
    await setEditingKeyHandler(id);
    setTimeout(() => {
      if (tabsRef.current) {
        tabsRef.current.scrollTop = tabsRef.current.scrollHeight;
      }
    }, 0);
    setNewItem("");
  };

  const handleRemove = async (idx: number) => {
    const newItems = [...items];
    newItems.splice(idx, 1);
    setItems(newItems);
    if (newItems[idx - 1] && newItems[idx - 1].id) {
      editingKey = newItems[idx - 1].id;
      await setEditingKeyHandler(editingKey);
    }
    setConfigItems(newItems);
  };

  return (
    <>
      <div className="xswitch-wrapper">
        <div className="xswitch-left-area">
          <ul className="xswitch-tabs" ref={tabsRef}>
            {items.map((item, idx) => (
              <li
                key={item.id}
                id={item.id}
                draggable
                onClick={() => handleSetEditingKey(item.id)}
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragOver={(e) => handleDragOver(e, item.id)}
                onDrop={(e) => handleDrop(e, item.id)}
                className={classNames(
                  { editing: item.id === editKeyForUI },
                  { dragovering: item.id === dragoverKey }
                )}
              >
                <Checkbox
                  checked={item.active}
                  onChange={() => handleSetActive(idx)}
                  disabled={item.id === "0"}
                />
                <span className="label">&nbsp;{item.name}</span>
                {item.id !== "0" && (
                  <Popconfirm
                    title={"Are you sure to delete?"}
                    onConfirm={() => handleRemove(idx)}
                  >
                    <DeleteOutlined className="delete-icon" />
                  </Popconfirm>
                )}
              </li>
            ))}
          </ul>
          <div className="xswitch-new-item-container">
            <Input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onPressEnter={handleAdd}
              className="new-item"
              placeholder="新建规则名称"
              style={{ marginTop: 8 }}
            />
            <EditTwoTone onClick={handleAdd} className="confirm-button" />
          </div>
        </div>
        <div className="xswitch-container" ref={shellRef}></div>
      </div>
      <div className="toolbar-area">
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={checked}
          onChange={handleToggle}
        />

        <QuestionCircleTwoTone
          className="open-readme"
          onClick={handleOpenReadme}
        />

        <CodeTwoTone className="new-tab-control" onClick={handleOpenNewTab} />
      </div>
    </>
  );
};

ReactDOM.render(<XSwitch />, document.getElementById("root"));
