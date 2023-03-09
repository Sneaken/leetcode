// https://leetcode.cn/problems/longest-valid-parentheses/
// 难度: 困难
//
// 给你一个只包含 '('和 ')'的字符串，找出最长有效（格式正确且连续）括号子串的长度。
// 示例 1：
//   输入：s = "(()"
//   输出：2
//   解释：最长有效括号子串是 "()"
// 示例 2：
//   输入：s = ")()())"
//   输出：4
//   解释：最长有效括号子串是 "()()"
// 示例 3：
//   输入：s = ""
//   输出：0
// 提示：
//   0 <= s.length <= 3 * 10^4
//   s[i] 为 '(' 或 ')'
// 标签:
//   栈, 字符串, 动态规划

const testcases = [{ s: '(()' }, { s: ')()())' }, { s: '' }];
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {};
testcases.forEach(({ s }) => {
  console.log('longestValidParentheses(s) =>', longestValidParentheses(s));
});
