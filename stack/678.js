// https://leetcode.cn/problems/valid-parenthesis-string/
// 难度: 中等
//
// 给定一个只包含三种字符的字符串：（，）和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
// 任何左括号 (必须有相应的右括号 )。
// 任何右括号 )必须有相应的左括号 (。
// 左括号 ( 必须在对应的右括号之前 )。
// *可以被视为单个右括号 )，或单个左括号 (，或一个空字符串。
// 一个空字符串也被视为有效字符串。
// 示例 1:
//   输入: ()
//   输出: True
// 示例 2:
//   输入: (*)
//   输出: True
// 示例 3:
//   输入: (*))
//   输出: True
// 注意:
// 字符串大小将在 [1，100] 范围内。
// 标签:
//   栈, 贪心, 字符串, 动态规划

const testcases = [{ s: '()' }, { s: '(*)' }, { s: '(*))' }];
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const leftStack = [];
  const asteriskStack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === '(') {
      leftStack.push(i);
    } else if (c === '*') {
      asteriskStack.push(i);
    } else {
      if (leftStack.length) {
        leftStack.pop();
      } else if (asteriskStack.length) {
        asteriskStack.pop();
      } else {
        // 多余的右括号
        return false;
      }
    }
  }
  while (leftStack.length && asteriskStack.length) {
    const leftIndex = leftStack.pop();
    const asteriskIndex = asteriskStack.pop();
    // 假设 '*' 为 ')', 判断 是否匹配
    if (leftIndex > asteriskIndex) return false;
  }

  // 多余的左括号
  return leftStack.length === 0;
};
testcases.forEach(({ s }) => {
  console.log('checkValidString(s) =>', checkValidString(s));
});
