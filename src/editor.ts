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
  POPUP_HTML_NAME,
  RULE,
  RULE_COMPLETION,
  SHOW_FOLDING_CONTROLS,
  SWITCH_AREA_DOM_ID,
  SWITCH_CHECKED_CLASSNAME,
  SWITCH_DOM_ID,
  SWITCH_INNER_DOM_ID,
} from './constant';
import { BadgeText, Enabled } from './enum';
import forward from './forward';
import { JSONC2JSON } from './utils';

window.require.config({ paths: { vs: MONACO_VS_PATH } });

let editor;
chrome.storage.sync.get(JSONC_STORAGE_KEY, result => {
  let monacoReady: boolean = true;

  window.require([MONACO_CONTRIBUTION_PATH], () => {
    editor = window.monaco.editor.create(
      document.getElementById(CONTAINER_DOM_ID),
      {
        value: result.config_for_shown || DEFAULT_DATA,
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

    setStorage();

    window.monaco.languages.registerCompletionItemProvider(LANGUAGE_JSON, {
      provideCompletionItems: () => {
        const textArr = [];
        forward.urls.forEach(item => {
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
      setStorage();
    });

    editor.onDidScrollChange(() => {
      if (monacoReady) {
        runFormat();
        monacoReady = false;
      }
    });
  });
});

function setStorage() {
  const jsonc = editor.getValue();
  const json = JSONC2JSON(jsonc);

  chrome.storage.sync.set(
    {
      [JSONC_STORAGE_KEY]: jsonc,
      [JSON_STORAGE_KEY]: json
    },
    () => {}
  );
}

function runFormat() {
  return editor.trigger(ANYTHING, FORMAT_DOCUMENT_CMD);
}

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

function turnOn() {
  document
    .getElementById(SWITCH_DOM_ID)
    .classList.add(SWITCH_CHECKED_CLASSNAME);
  document.getElementById(SWITCH_INNER_DOM_ID).innerHTML = BadgeText.ON;
}

function turnOff() {
  document
    .getElementById(SWITCH_DOM_ID)
    .classList.remove(SWITCH_CHECKED_CLASSNAME);
  document.getElementById(SWITCH_INNER_DOM_ID).innerHTML = BadgeText.OFF;
}

chrome.storage.sync.get(DISABLED_STORAGE_KEY, result => {
  document.getElementById(SWITCH_AREA_DOM_ID).style.opacity = OPACITY_VISIBLE;
  if (result.disabled === Enabled.NO) {
    turnOff();
  } else {
    turnOn();
  }
});

document.getElementById(SWITCH_DOM_ID).addEventListener(CLICK, ev => {
  // if disabled
  if (
    (<HTMLSelectElement>ev.currentTarget).classList.contains(
      SWITCH_CHECKED_CLASSNAME
    )
  ) {
    turnOff();
    chrome.storage.sync.set({
      disabled: Enabled.NO
    });
  } else {
    chrome.storage.sync.set({
      disabled: Enabled.YES
    });
    turnOn();
  }
});

document.getElementById(NEW_TAB_DOM_ID).addEventListener(CLICK, ev => {
  chrome.tabs.create(
    { url: chrome.extension.getURL(POPUP_HTML_NAME) },
    function(tab) {
      // Tab opened.
    }
  );
});

document.getElementById(OPEN_README_DOM_ID).addEventListener(CLICK, ev => {
  chrome.tabs.create({ url: HELP_URL }, function(tab) {
    // Tab opened.
  });
});

preventSave();
