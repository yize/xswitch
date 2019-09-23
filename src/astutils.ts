const estraverse = require('estraverse');
const esutils = require('esutils');

function deepCopy(obj: any) {
  const ret: any = {};
  let key;
  let val;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      val = obj[key];
      if (typeof val === 'object' && val !== null) {
        ret[key] = deepCopy(val);
      } else {
        ret[key] = val;
      }
    }
  }
  return ret;
}

var BREAK = {};
var SKIP = {};
var REMOVE = {};

var VisitorOption = {
  Break: BREAK,
  Skip: SKIP,
  Remove: REMOVE
};

function upperBound(array: any[], func: Function) {
  var diff, len, i, current;
  
  len = array.length;
  i = 0;
  
  while (len) {
    diff = len >>> 1;
    current = i + diff;
    if (func(array[current])) {
      len = diff;
    } else {
      i = current + 1;
      len -= diff + 1;
    }
  }
  return i;
}

function extendCommentRange(comment: any, tokens: any[]) {
  var target;
  
  target = upperBound(tokens, function search(token: any) {
    return token.range[0] > comment.range[0];
  });
  
  comment.extendedRange = [comment.range[0], comment.range[1]];
  
  if (target !== tokens.length) {
    comment.extendedRange[1] = tokens[target].range[0];
  }
  
  target -= 1;
  if (target >= 0) {
    comment.extendedRange[0] = tokens[target].range[1];
  }
  
  return comment;
}

function addIndent(stmt: any, base = '') {
  return [base, stmt];
}

export function attachComments(tree: any, providedComments: any[], tokens: any[]) {
  // At first, we should calculate extended comment ranges.
  const comments: any[] = [];
  let len: number;
  let comment: any;
  let i;
  let cursor: number;
  
  if (!tree.range) {
    throw new Error('attachComments needs range information');
  }
  
  // tokens array is empty, we attach comments to tree as 'leadingComments'
  if (!tokens.length) {
    if (providedComments.length) {
      for (i = 0, len = providedComments.length; i < len; i += 1) {
        comment = deepCopy(providedComments[i]);
        comment.extendedRange = [0, tree.range[0]];
        comments.push(comment);
      }
      tree.leadingComments = comments;
    }
    return tree;
  }
  
  for (i = 0, len = providedComments.length; i < len; i += 1) {
    comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
  }
  
  console.log('comments', comments);
  
  // This is based on John Freeman's implementation.
  cursor = 0;
  estraverse.traverse(tree, {
    enter: function (node: any) {
      var comment;
      
      while (cursor < comments.length) {
        comment = comments[cursor];
        if (comment.extendedRange[1] > node.range[0]) {
          break;
        }
        
        if (comment.extendedRange[1] === node.range[0]) {
          if (!node.leadingComments) {
            node.leadingComments = [];
          }
          node.leadingComments.push(comment);
          comments.splice(cursor, 1);
        } else {
          cursor += 1;
        }
      }
      
      // already out of owned node
      if (cursor === comments.length) {
        return VisitorOption.Break;
      }
      
      if (comments[cursor].extendedRange[0] > node.range[1]) {
        return VisitorOption.Skip;
      }
    }
  });
  
  cursor = 0;
  estraverse.traverse(tree, {
    leave: function (node: any) {
      var comment;
      while (cursor < comments.length) {
        comment = comments[cursor];
        if (node.range[1] < comment.extendedRange[0]) {
          break;
        }
        
        if (node.range[1] === comment.extendedRange[0]) {
          if (!node.leadingComments) {
            node.leadingComments = [];
          }
          node.leadingComments.push(comment);
          comments.splice(cursor, 1);
        } else {
          cursor += 1;
        }
      }
      
      // already out of owned node
      if (cursor === comments.length) {
        return VisitorOption.Break;
      }
      
      if (comments[cursor].extendedRange[0] > node.range[1]) {
        return VisitorOption.Skip;
      }
    }
  });
  
  return tree;
}

function flattenToString(arr: any[]) {
  var i, iz, elem, result = '';
  for (i = 0, iz = arr.length; i < iz; ++i) {
    elem = arr[i];
    result += Array.isArray(elem) ? flattenToString(elem) : elem;
  }
  return result;
}

function toSourceNodeWhenNeeded(generated: any) {
  if (Array.isArray(generated)) {
    return flattenToString(generated);
  } else {
    return generated;
  }
}

export function adjustMultilineComment(value: string, base: string = '', specialBase: any) {
  var array, i, len, line, j, spaces, previousBase, sn;
  
  array = value.split(/\r\n|[\r\n]/);
  spaces = Number.MAX_VALUE;
  
  // first line doesn't have indentation
  for (i = 1, len = array.length; i < len; ++i) {
    line = array[i];
    j = 0;
    while (j < line.length && esutils.code.isWhiteSpace(line.charCodeAt(j))) {
      ++j;
    }
    if (spaces > j) {
      spaces = j;
    }
  }
  
  if (typeof specialBase !== 'undefined') {
    // pattern like
    // {
    //   var t = 20;  /*
    //                 * this is comment
    //                 */
    // }
    previousBase = base;
    if (array[1][spaces] === '*') {
      specialBase += ' ';
    }
    base = specialBase;
  } else {
    if (spaces & 1) {
      // /*
      //  *
      //  */
      // If spaces are odd number, above pattern is considered.
      // We waste 1 space.
      --spaces;
    }
    previousBase = base;
  }
  
  for (i = 1, len = array.length; i < len; ++i) {
    sn = toSourceNodeWhenNeeded(addIndent(array[i].slice(spaces)));
    array[i] = sn;
  }
  
  base = previousBase;
  
  return array.join('\n');
}
