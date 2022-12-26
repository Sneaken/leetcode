// https://leetcode.cn/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 示例 1：
// 输入：s = "()"
// 输出：true
// 示例2：
// 输入：s = "()[]{}"
// 输出：true
// 示例3：
// 输入：s = "(]"
// 输出：false
// 提示：
// 1 = s.length = 10^4
// s 仅由括号 '()[]{}' 组成

// 标签: 栈,字符串
const testcases = ['()', '()[]{}', '(]', '([)]', '([])', '(', '({[)', '({})', '([]'];
/**
 * 64ms 69.83%
 * 41MB 94.66%
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) return false;
  const other = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];

  for (let i = 0; i < len; i++) {
    const char = s.charAt(i);
    if (other[char]) {
      const toBeMatched = stack.pop();
      if (toBeMatched !== other[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

var isValid2 = function (s) {
  let len = s.length;
  if (len % 2 === 1) return false;
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < len; i++) {
    let val = s.charAt(i);
    if (val in map) {
      stack.push(val);
    } else {
      let top = stack.pop();
      if (map[top] !== val) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

testcases.map((it) => {
  console.log('isValid(it) =>', it, isValid(it));
});

testcases.map((it) => {
  console.log('isValid2(it) =>', it, isValid2(it));
});
