require.config({ paths: { vs: 'lib/monaco-editor/min/vs' } });
const reg = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
chrome.storage.sync.get('config_for_shown', (result) => {
  window.require(['vs/editor/editor.main'], () => {
    const editor = window.monaco.editor.create(document.getElementById('container'), {
      value: result.config_for_shown || window.DEFAULT_DATA,
      language: 'json',

      minimap: {
        enabled: false,
      },
      fontFamily: 'Fira Code, monospace',
      fontSize: 13,
      fontLigatures: true,

      contextmenu: false,
      scrollBeyondLastLine: false,
      folding: true,

      useTabStops: true,
      wordBasedSuggestions: true,
      quickSuggestions: true,
      suggestOnTriggerCharacters: true,

      scrollbar: {
        verticalScrollbarSize: 5,
      },
    });

    function setStorage() {
      const data = editor.getValue();
      chrome.storage.sync.set(
        {
          config_for_shown: data,
          config: window.stripJsonComments(data),
        },
        () => {},
      );
    }
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {
        const textArr = chrome.extension.getBackgroundPage().urls.map(item => ({
          label: item,
          kind: monaco.languages.CompletionItemKind.Text,
        }));
        const extraItems = [
          {
            label: 'rule',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: {
              value: `[
  "\${1:from}",
  "\${2:to}"
]\${0}`,
            },
          },
        ];

        return [...textArr, ...extraItems];
      },
    });

    editor.onDidChangeModelContent(() => {
      setStorage();
    });
  });
});
