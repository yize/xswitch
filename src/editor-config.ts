import {
  DEFAULT_DATA,
  LANGUAGE_JSON,
  DEFAULT_FONT_FAMILY,
  SHOW_FOLDING_CONTROLS,
} from './constants';

export function getEditorConfig(value: string): object {
  return {
    value: value || DEFAULT_DATA,
    language: LANGUAGE_JSON,

    minimap: {
      enabled: false,
    },
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 13,

    // 容器宽高会随 popup/标签页切换与窗口 resize 变化，
    // 让 Monaco 自动观测容器尺寸并重新布局。
    automaticLayout: true,

    // 长行不折行，由 Monaco 自身的横向滚动条处理内容溢出。
    wordWrap: "off",
    scrollbar: {
      horizontal: "auto",
      horizontalScrollbarSize: 10,
    },

    contextmenu: true,
    scrollBeyondLastLine: false,
    folding: true,
    showFoldingControls: SHOW_FOLDING_CONTROLS,

    useTabStops: true,
    wordBasedSuggestions: true,
    quickSuggestions: true,
    suggestOnTriggerCharacters: true,
  };
}
