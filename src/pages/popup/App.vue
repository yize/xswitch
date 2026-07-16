<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { message } from "ant-design-vue";
import {
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
  QuestionCircleTwoTone,
  CodeTwoTone,
  EditTwoTone,
} from "@ant-design/icons-vue";
import monaco from "@/monaco-env";
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
import { Enabled } from "@/enums";
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

const shellRef = ref<HTMLDivElement | null>(null);
const tabsRef = ref<HTMLUListElement | null>(null);

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

  const editingConfigKey = await getEditingConfigKey();
  editingKey = editingConfigKey;
  editKeyForUI.value = editingConfigKey;
  const config = await getConfig(editingConfigKey);
  items.value = Array.from(await getConfigItems());
  await removeUnusedItems();

  let monacoReady = true;
  if (shellRef.value) {
    editor = monaco.editor.create(
      shellRef.value,
      getEditorConfig((config as any)?.[JSONC_CONFIG]) as any
    );
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
  <div class="xswitch-wrapper">
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

    <question-circle-two-tone
      class="open-readme"
      @click="handleOpenReadme"
    />

    <code-two-tone
      class="new-tab-control"
      @click="handleOpenNewTab"
    />
  </div>
</template>
