require.config({ paths: { vs: "lib/monaco-editor/min/vs" } });
const reg = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
chrome.storage.sync.get("config_for_shown", result => {
    window.require(["vs/editor/editor.main"], () => {
        const editor = window.monaco.editor.create(
            document.getElementById("container"),
            {
                value: result.config_for_shown || window.DEFAULT_DATA,
                language: "json",
                minimap: {
                    enabled: false
                },
                // lineNumbers: 'off',
                // contextmenu: false,
                fontFamily: "Fira Code, monospace",
                fontSize: 13,
                scrollbar: {
                    verticalScrollbarSize: 3
                },
                fontLigatures: true
            }
        );

        function setStorage() {
            const data = editor.getValue();
            chrome.storage.sync.set(
                {
                    config_for_shown: data,
                    config: window.stripJsonComments(data)
                },
                () => {}
            );
        }
        monaco.languages.registerCompletionItemProvider("json", {
            provideCompletionItems: (model, position) => {
                return chrome.extension.getBackgroundPage().urls.map(item => {
                    return {
                        label: item,
                        kind: monaco.languages.CompletionItemKind.Text
                    };
                });
            }
        });

        editor.onDidChangeModelContent(function() {
            setStorage();
            editor.trigger(
                "source - use any string you like",
                "editor.action.triggerSuggest",
                {}
            );
        });
    });
});
