import { stripJsonComments } from './strip-json-comments';
import { REG, EMPTY_STRING } from './constants';

export function JSONC2JSON(jsonc: string): string {
  return stripJsonComments(jsonc)
    .replace(REG.WHITESPACE, EMPTY_STRING)
    .replace(REG.TRIM_JSON, ($0, $1, $2) => $2);
}

export function JSON_Parse(json: string, cb: (error: object | boolean, json?: object) => void): void {
  try {
    cb(false, JSON.parse(json));
  } catch (e) {
    cb(e);
  }
}
