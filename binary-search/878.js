// https://leetcode.cn/problems/nth-magical-number/
// 一个正整数如果能被 a 或 b 整除，那么它是神奇的。
// 给定三个整数 n ,a , b ，返回第 n 个神奇的数字。因为答案可能很大，所以返回答案对10^9+ 7 取模后的值。
// 示例 1：
// 输入：n = 1, a = 2, b = 3
// 输出：2
// 示例2：
// 输入：n = 4, a = 2, b = 3
// 输出：6
// 提示：
// 1 = n = 10^9
// 2 = a, b = 4 * 10^4

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  let l = Math.min(a, b);
  let r = n * Math.min(a, b);
  // 公式： 两数的积等于最大公因数和最小公倍数之积
  // 最大公因数
  const gcd = (a, b) => (b !== 0 ? gcd(b, a % b) : a);
  // 最小公倍数
  const lcm = (a, b) => Math.floor((a * b) / gcd(a, b));
  const c = lcm(a, b);
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c);
    if (cnt >= n) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return (r + 1) % 1000000007;
};
const n = 1000000000,
  a = 2,
  b = 3;
console.log('nthMagicalNumber(n, a, b) => ', nthMagicalNumber(n, a, b));
