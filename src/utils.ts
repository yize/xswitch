import { stripJsonComments } from './strip-json-comments';
import { REG } from './constant';

export function JSONC2JSON(jsonc: string): string {
  return stripJsonComments(jsonc)
    .replace(REG.WHITESPACE, '')
    .replace(REG.TRIM_JSON, ($0, $1, $2) => $2);
}
