import { EMPTY_STRING } from './constants';

// https://github.com/sindresorhus/strip-json-comments
const singleComment = 1;
const multiComment = 2;
const stripWithoutWhitespace = (): string => EMPTY_STRING;
const stripWithWhitespace = (str: string, start: number, end: number): string =>
  str.slice(start, end).replace(/\S/g, ' ');

interface IStripOptions {
  whitespace?: boolean;
}

export function stripJsonComments(str: string, opts?: IStripOptions): string {
  opts = opts || {};

  const strip =
    opts.whitespace === false ? stripWithoutWhitespace : stripWithWhitespace;

  let insideString: boolean = false;
  let insideComment: number | boolean = false;
  let offset: number = 0;
  let ret: string = EMPTY_STRING;

  for (let i: number = 0; i < str.length; i++) {
    const currentChar = str[i];
    const nextChar = str[i + 1];

    if (!insideComment && currentChar === '"') {
      const escaped = str[i - 1] === '\\' && str[i - 2] !== '\\';
      if (!escaped) {
        insideString = !insideString;
      }
    }

    if (insideString) {
      continue;
    }

    if (!insideComment && currentChar + nextChar === '//') {
      ret += str.slice(offset, i);
      offset = i;
      insideComment = singleComment;
      i++;
    } else if (
      insideComment === singleComment &&
      currentChar + nextChar === '\r\n'
    ) {
      i++;
      insideComment = false;
      ret += strip(str, offset, i);
      offset = i;
      continue;
    } else if (insideComment === singleComment && currentChar === '\n') {
      insideComment = false;
      ret += strip(str, offset, i);
      offset = i;
    } else if (!insideComment && currentChar + nextChar === '/*') {
      ret += str.slice(offset, i);
      offset = i;
      insideComment = multiComment;
      i++;
      continue;
    } else if (
      insideComment === multiComment &&
      currentChar + nextChar === '*/'
    ) {
      i++;
      insideComment = false;
      ret += strip(str, offset, i + 1);
      offset = i + 1;
      continue;
    }
  }

  return (
    ret + (insideComment ? strip(str.substr(offset), 0, 0) : str.substr(offset))
  );
}
