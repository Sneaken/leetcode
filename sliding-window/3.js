// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。
// 示例1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
// 请注意，你的答案必须是 子串 的长度，"pwke"是一个子序列，不是子串。
// 提示：
// 0 = s.length = 5 * 10^4
// s由英文字母、数字、符号和空格组成

const s = '1111223';
/**
 * 84ms
 * 44.3MB
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = -1;
  // 滑动窗口的大小
  let size = 0;
  let max = 0;
  const map = new Map();
  while (left + size + 1 < s.length) {
    const key = s[left + size + 1];
    const count = map.get(key) || 0;
    map.set(key, count + 1);
    if (count > 0) {
      max = Math.max(max, size);
    }
    while (map.get(s[left + size + 1]) !== 1) {
      map.set(s[left + 1], map.get(s[left + 1]) - 1);
      size--;
      left++;
    }
    size++;
  }
  max = Math.max(max, size);
  return max;
};

// 官方题解
// 76ms
// 45.8M
var lengthOfLongestSubstring2 = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

console.log('lengthOfLongestSubstring(s) =>', lengthOfLongestSubstring(s));
console.log('lengthOfLongestSubstring2(s) =>', lengthOfLongestSubstring2(s));

// 72ms
// 44MB
function lengthOfLongestSubstring3(s) {
  const map = new Map();
  let left = 0;
  let res = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(left, map.get(char));
    }
    map.set(char, right);
    res = Math.max(right - left, res);
  }
  return res;
}

console.log('lengthOfLongestSubstring3(s) =>', lengthOfLongestSubstring3(s));
