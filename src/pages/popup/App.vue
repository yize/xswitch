<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { message, Modal } from "ant-design-vue";
import {
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
  QuestionCircleTwoTone,
  CodeTwoTone,
  EditTwoTone,
  BulbTwoTone,
  SnippetsTwoTone,
} from "@ant-design/icons-vue";
import monaco from "@/monaco-env";
import { useTheme } from "@/use-theme";
import {
  ANYTHING,
  FORMAT_DOCUMENT_CMD,
  KEY_CODE_S,
  KEY_DOWN,
  LANGUAGE_JSON,
  PLATFORM_MAC,
  RULE,
  RULE_COMPLETION,
  POPUP_HTML_PATH,
  HELP_URL,
  DEFAULT_DUP_DATA,
  JSONC_CONFIG,
} from "@/constants";
import { Enabled, ThemeMode } from "@/enums";
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
  exportRules,
  importRules,
  isValidRuleExport,
} from "@/chrome-storage";
import { getEditorConfig } from "@/editor-config";

interface RuleItem {
  id: string;
  name: string;
  active: boolean;
}

const checked = ref(true);
const dragoverKey = ref("");
const editKeyForUI = ref("0");
const newItem = ref("");
const items = ref<RuleItem[]>([]);
// 是否已在独立标签页中打开：popup 弹窗里 getCurrent 返回 undefined，
// 标签页里返回 tab 对象。用于在标签页中隐藏「新标页打开」按钮。
const isInTab = ref(false);

// 主题：自动 / 浅色 / 深色
const { themeMode, isDark, themeConfig, initTheme, setMode } = useTheme();

function onSelectTheme({ key }: { key: ThemeMode }) {
  setMode(key);
}

// Monaco 主题跟随明暗切换
watch(
  isDark,
  (dark) => {
    monaco.editor.setTheme(dark ? "xswitch-dark" : "xswitch-light");
  },
  { immediate: true }
);

const shellRef = ref<HTMLDivElement | null>(null);
const tabsRef = ref<HTMLUListElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
// 选择文件前记录本次导入模式：合并追加 or 覆盖全部
let pendingImportMode: "merge" | "overwrite" = "merge";

let editor: monaco.editor.IStandaloneCodeEditor | null = null;
let editingKey = "0";
let completionProvider: monaco.IDisposable | null = null;

function preventSave(e: KeyboardEvent) {
  const controlKeyDown = navigator.platform.match(PLATFORM_MAC)
    ? e.metaKey
    : e.ctrlKey;
  if (e.keyCode === KEY_CODE_S && controlKeyDown) {
    e.preventDefault();
  }
}

function registerCompletion() {
  completionProvider = monaco.languages.registerCompletionItemProvider(
    LANGUAGE_JSON,
    {
      provideCompletionItems(
        model: monaco.editor.ITextModel,
        position: monaco.Position
      ) {
        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        };

        const extraItems: monaco.languages.CompletionItem[] = [
          {
            label: RULE,
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: RULE_COMPLETION,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
          },
        ];

        // getUrls 是异步消息，返回 Promise 让补全真正拿到历史 URL
        return new Promise<monaco.languages.CompletionList>((resolve) => {
          try {
            chrome.runtime.sendMessage(
              { action: "getUrls" },
              (response: { urls?: string[] }) => {
                const textArr: monaco.languages.CompletionItem[] = [];
                if (response && response.urls) {
                  response.urls.forEach((item) => {
                    if (item) {
                      textArr.push({
                        label: item,
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: item,
                        range,
                      });
                    }
                  });
                }
                resolve({ suggestions: [...textArr, ...extraItems] });
              }
            );
          } catch {
            resolve({ suggestions: extraItems });
          }
        });
      },
    }
  );
}

function setEditorValue(value: string) {
  if (editor) editor.setValue(value);
}

async function setEditingKeyHandler(id: string) {
  editingKey = id;
  const config = await getConfig(id);
  setEditorValue((config as any)?.[JSONC_CONFIG] || DEFAULT_DUP_DATA);
  setEditingConfigKey(id);
}

async function handleSetEditingKey(id: string) {
  editKeyForUI.value = id;
  await setEditingKeyHandler(id);
}

function handleToggle(value: boolean) {
  checked.value = value;
  setChecked(value);
}

function handleOpenNewTab() {
  openLink(POPUP_HTML_PATH, true);
}

function handleOpenReadme() {
  openLink(HELP_URL);
}

// 触发浏览器下载一个文本文件
function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // 释放对象 URL，避免内存泄漏
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

async function handleExportRules() {
  try {
    const payload = await exportRules();
    const date = new Date().toISOString().slice(0, 10);
    downloadTextFile(
      `xswitch-rules-${date}.json`,
      JSON.stringify(payload, null, 2)
    );
    message.success("规则已导出");
  } catch {
    message.error("导出失败");
  }
}

// 重新从存储加载分组列表与编辑器内容（导入后刷新 UI）
async function reloadFromStorage(preferKey?: string) {
  items.value = Array.from(await getConfigItems());
  const key =
    preferKey && items.value.some((it) => it.id === preferKey)
      ? preferKey
      : items.value[0]?.id || "0";
  editingKey = key;
  editKeyForUI.value = key;
  setEditingConfigKey(key);
  const config = await getConfig(key);
  setEditorValue((config as any)?.[JSONC_CONFIG] || DEFAULT_DUP_DATA);
}

// 点击「导入」菜单：记录模式，覆盖模式先二次确认再打开文件选择框
function handleImportMenuClick({ key }: { key: string }) {
  if (key === "export") {
    handleExportRules();
    return;
  }
  const mode = key === "import-overwrite" ? "overwrite" : "merge";
  const openPicker = () => {
    pendingImportMode = mode;
    fileInputRef.value?.click();
  };
  if (mode === "overwrite") {
    Modal.confirm({
      title: "覆盖导入",
      content: "将用导入文件中的规则替换当前全部规则，确定继续？",
      okText: "覆盖",
      okType: "danger",
      cancelText: "取消",
      onOk: openPicker,
    });
  } else {
    openPicker();
  }
}

async function onImportFileChange(ev: Event) {
  const input = ev.target as HTMLInputElement;
  const file = input.files && input.files[0];
  // 允许再次选择同一文件：清空 value
  input.value = "";
  if (!file) {
    return;
  }
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!isValidRuleExport(data)) {
      message.error("文件格式不正确，不是有效的 XSwitch 规则文件");
      return;
    }
    await importRules(data, pendingImportMode);
    await reloadFromStorage(pendingImportMode === "merge" ? editingKey : "0");
    message.success(
      pendingImportMode === "overwrite"
        ? "已覆盖导入规则"
        : `已合并导入 ${data.items.length} 个分组`
    );
  } catch {
    message.error("导入失败：无法解析文件");
  }
}

function handleDragStart(ev: DragEvent, id: string) {
  ev.dataTransfer?.setData("application/my-app", id);
  if (ev.dataTransfer) ev.dataTransfer.effectAllowed = "move";
}

function handleDragOver(ev: DragEvent, id: string) {
  ev.preventDefault();
  dragoverKey.value = id;
  if (ev.dataTransfer) ev.dataTransfer.dropEffect = "move";
}

function handleDrop(ev: DragEvent, id: string) {
  ev.preventDefault();
  const srcId = ev.dataTransfer?.getData("application/my-app") || "";
  dragoverKey.value = "";
  swapItem(srcId, id);
}

function swapItem(srcItemId: string, destItemId: string) {
  const list = items.value;
  let srcIdx: number | undefined;
  let destIdx: number | undefined;
  list.forEach((item, idx) => {
    if (item.id === srcItemId) srcIdx = idx;
    if (item.id === destItemId) destIdx = idx;
  });
  if (srcIdx === undefined || destIdx === undefined) {
    return;
  }
  const newItems = [...list];
  const tmp = newItems[srcIdx];
  newItems[srcIdx] = newItems[destIdx];
  newItems[destIdx] = tmp;
  items.value = newItems;
  setConfigItems(newItems);
}

function handleSetActive(idx: number) {
  const newItems = [...items.value];
  newItems[idx].active = !newItems[idx].active;
  items.value = newItems;
  setConfigItems(newItems);
}

async function handleAdd() {
  if (newItem.value.trim() === "") {
    message.error("Rule name should not be an empty string!");
    return;
  }
  const id = "" + new Date().getTime();
  const newItems = [...items.value, { id, name: newItem.value, active: true }];
  items.value = newItems;
  setConfigItems(newItems);
  editingKey = id;
  editKeyForUI.value = id;
  setEditingConfigKey(id);
  await setEditingKeyHandler(id);
  setTimeout(() => {
    if (tabsRef.value) {
      tabsRef.value.scrollTop = tabsRef.value.scrollHeight;
    }
  }, 0);
  newItem.value = "";
}

async function handleRemove(idx: number) {
  const newItems = [...items.value];
  newItems.splice(idx, 1);
  items.value = newItems;
  if (newItems[idx - 1] && newItems[idx - 1].id) {
    editingKey = newItems[idx - 1].id;
    editKeyForUI.value = editingKey;
    await setEditingKeyHandler(editingKey);
  }
  setConfigItems(newItems);
}

onMounted(async () => {
  checked.value = (await getChecked()) !== Enabled.NO;

  // 加载主题设置（自动/浅色/深色）
  await initTheme();

  // 判断当前是否已在独立标签页中打开
  try {
    chrome.tabs.getCurrent((tab) => {
      isInTab.value = !!tab;
    });
  } catch {
    isInTab.value = false;
  }

  const editingConfigKey = await getEditingConfigKey();
  editingKey = editingConfigKey;
  editKeyForUI.value = editingConfigKey;
  const config = await getConfig(editingConfigKey);
  items.value = Array.from(await getConfigItems());
  await removeUnusedItems();

  let monacoReady = true;
  if (shellRef.value) {
    editor = monaco.editor.create(shellRef.value, {
      ...(getEditorConfig((config as any)?.[JSONC_CONFIG]) as any),
      theme: isDark.value ? "xswitch-dark" : "xswitch-light",
    });
    saveConfig(editor.getValue(), editingKey);

    registerCompletion();

    editor.onDidChangeModelContent(() => {
      if (editor) saveConfig(editor.getValue(), editingKey);
    });

    editor.onDidScrollChange(() => {
      if (monacoReady && editor) {
        editor.trigger(ANYTHING, FORMAT_DOCUMENT_CMD, null);
        monacoReady = false;
      }
    });
  }

  document.addEventListener(KEY_DOWN, preventSave, false);
});

onBeforeUnmount(() => {
  document.removeEventListener(KEY_DOWN, preventSave, false);
  completionProvider?.dispose();
  editor?.dispose();
});
</script>

<template>
  <a-config-provider :theme="themeConfig">
    <div
      class="xswitch-wrapper"
      :class="{ 'in-tab': isInTab }"
    >
      <div class="xswitch-left-area">
        <ul
          ref="tabsRef"
          class="xswitch-tabs"
        >
          <li
            v-for="(item, idx) in items"
            :id="item.id"
            :key="item.id"
            draggable="true"
            :class="{
              editing: item.id === editKeyForUI,
              dragovering: item.id === dragoverKey,
            }"
            @click="handleSetEditingKey(item.id)"
            @dragstart="(e) => handleDragStart(e, item.id)"
            @dragover="(e) => handleDragOver(e, item.id)"
            @drop="(e) => handleDrop(e, item.id)"
          >
            <a-checkbox
              :checked="item.active"
              :disabled="item.id === '0'"
              @change="handleSetActive(idx)"
              @click.stop
            />
            <span class="label">&nbsp;{{ item.name }}</span>
            <a-popconfirm
              v-if="item.id !== '0'"
              title="Are you sure to delete?"
              @confirm="handleRemove(idx)"
            >
              <delete-outlined
                class="delete-icon"
                @click.stop
              />
            </a-popconfirm>
          </li>
        </ul>
        <div class="xswitch-new-item-container">
          <a-input
            v-model:value="newItem"
            class="new-item"
            placeholder="新建规则名称"
            :style="{ marginTop: '8px' }"
            @press-enter="handleAdd"
          />
          <edit-two-tone
            class="confirm-button"
            @click="handleAdd"
          />
        </div>
      </div>
      <div
        ref="shellRef"
        class="xswitch-container"
      />
    </div>

    <div class="toolbar-area">
      <a-switch
        :checked="checked"
        @change="handleToggle"
      >
        <template #checkedChildren>
          <check-outlined />
        </template>
        <template #unCheckedChildren>
          <close-outlined />
        </template>
      </a-switch>

      <a-dropdown :trigger="['click']">
        <bulb-two-tone class="theme-control" />
        <template #overlay>
          <a-menu
            :selected-keys="[themeMode]"
            @click="onSelectTheme"
          >
            <a-menu-item :key="ThemeMode.AUTO">
              跟随系统
            </a-menu-item>
            <a-menu-item :key="ThemeMode.LIGHT">
              浅色
            </a-menu-item>
            <a-menu-item :key="ThemeMode.DARK">
              深色
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <a-dropdown :trigger="['click']">
        <snippets-two-tone class="rules-control" />
        <template #overlay>
          <a-menu @click="handleImportMenuClick">
            <a-menu-item key="export">
              导出规则
            </a-menu-item>
            <a-menu-item key="import-merge">
              导入并合并
            </a-menu-item>
            <a-menu-item key="import-overwrite">
              导入并覆盖
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <question-circle-two-tone
        class="open-readme"
        @click="handleOpenReadme"
      />

      <code-two-tone
        v-if="!isInTab"
        class="new-tab-control"
        @click="handleOpenNewTab"
      />
    </div>

    <input
      ref="fileInputRef"
      type="file"
      accept="application/json,.json"
      style="display: none"
      @change="onImportFileChange"
    >
  </a-config-provider>
</template>
