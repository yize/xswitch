import forward from './forward';
import {
  DEFAULT_DATA,
  RULE,
  LANGUAGE_JSON,
  SWITCH_DOM_ID,
  SWITCH_INNER_DOM_ID,
  DISABLED_STORAGE_KEY,
  SWITCH_AREA_DOM_ID,
  SWITCH_CHECKED_CLASSNAME,
  NEW_TAB_DOM_ID,
  OPEN_README_DOM_ID,
  HELP_URL,
  POPUP_HTML_NAME,
  CONTAINER_DOM_ID,
  DEFAULT_FONT_FAMILY,
  JSONC_STORAGE_KEY,
  JSON_STORAGE_KEY,
  MONACO_CONTRIBUTION_PATH,
  MONACO_VS_PATH,
  PLATFORM_MAC
} from './constant';
import { JSONC2JSON } from './utils';
import { BadgeText, Enabled } from './enum';

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
        showFoldingControls: 'always',

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
              value: `[
  "\${1:from}",
  "\${1:to}",
],`
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
  const jsonc: string = editor.getValue();
  const json: string = JSONC2JSON(jsonc);

  chrome.storage.sync.set(
    {
      [JSONC_STORAGE_KEY]: jsonc,
      [JSON_STORAGE_KEY]: json
    },
    () => {}
  );
}

function runFormat() {
  return editor.trigger('anyString', 'editor.action.formatDocument');
}

function preventSave() {
  document.addEventListener(
    'keydown',
    e => {
      let controlKeyDown: boolean = navigator.platform.match(PLATFORM_MAC)
        ? e.metaKey
        : e.ctrlKey;
      if (e.keyCode === 83 && controlKeyDown) {
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
  document.getElementById(SWITCH_AREA_DOM_ID).style.opacity = '1';
  if (result.disabled === Enabled.NO) {
    turnOff();
  } else {
    turnOn();
  }
});

document.getElementById(SWITCH_DOM_ID).addEventListener('click', ev => {
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
      disabled: ''
    });
    turnOn();
  }
});

document.getElementById(NEW_TAB_DOM_ID).addEventListener('click', ev => {
  chrome.tabs.create(
    { url: chrome.extension.getURL(POPUP_HTML_NAME) },
    function(tab) {
      // Tab opened.
    }
  );
});

document.getElementById(OPEN_README_DOM_ID).addEventListener('click', ev => {
  chrome.tabs.create({ url: HELP_URL }, function(tab) {
    // Tab opened.
  });
});

preventSave();
