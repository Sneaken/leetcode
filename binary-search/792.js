// https://leetcode.cn/problems/number-of-matching-subsequences/
// 给定字符串 s和字符串数组words, 返回words[i]中是s的子序列的单词个数。
// 字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。
// 例如， “ace” 是 “abcde” 的子序列。
// 示例 1:
// 输入: s = "abcde", words = ["a","bb","acd","ace"]
// 输出: 3
// 解释: 有三个是s 的子序列的单词: "a", "acd", "ace"。
// Example 2:
// 输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
// 输出: 2
// 提示:
// 1 = s.length = 5 * 10^4
// 1 = words.length = 5000
// 1 = words[i].length = 50
// words[i]和 <font color="#c7254e" face="Menlo, Monaco, Consolas, Courier New, monospace"><span style="font-size: 12.6px; background-color: rgb(249, 242, 244);">s都只由小写字母组成。
// <span style="display:block"><span style="height:0px"><span style="position:absolute">​​​​

const s = 'rwpddkvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvjubjgloeofnpjqlkdsqvruvabjrikfwronbrdyyjnakstqjac';
const words = [
  'wpddkvbnn',
  'lnagtva',
  'kvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvju',
  'rwpddkvbnnugln',
  'gloeofnpjqlkdsqvruvabjrikfwronbrdyyj',
  'vbgeinupkvgmgxeaaiuiyojmoqkahwvbpwugdainxciedbdkos',
  'mspuhbykmmumtveoighlcgpcapzczomshiblnvhjzqjlfkpina',
  'rgmliajkiknongrofpugfgajedxicdhxinzjakwnifvxwlokip',
  'fhepktaipapyrbylskxddypwmuuxyoivcewzrdwwlrlhqwzikq',
  'qatithxifaaiwyszlkgoljzkkweqkjjzvymedvclfxwcezqebx',
];
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let count = 0;
  for (const word of words) {
    let idx = -1;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const curIdx = s.indexOf(char, idx + 1);
      if (curIdx === -1) break;
      idx = curIdx;
      if (i === word.length - 1) count++;
    }
  }
  return count;
};

console.log('numMatchingSubseq(s, words) => ', numMatchingSubseq(s, words));
