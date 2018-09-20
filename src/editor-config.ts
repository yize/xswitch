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
    fontLigatures: true,

    contextmenu: false,
    scrollBeyondLastLine: false,
    folding: true,
    showFoldingControls: SHOW_FOLDING_CONTROLS,

    useTabStops: true,
    wordBasedSuggestions: true,
    quickSuggestions: true,
    suggestOnTriggerCharacters: true,
  };
}
