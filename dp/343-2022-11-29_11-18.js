// https://leetcode.cn/problems/integer-break/
// 难度: 中等
//
// 给定一个正整数n，将其拆分为 k 个 正整数 的和（k >= 2），并使这些整数的乘积最大化。
// 返回 你可以获得的最大乘积。
// 示例 1:
//   输入: n = 2
//   输出: 1
//   解释: 2 = 1 + 1, 1 × 1 = 1。
// 示例2:
//   输入: n = 10
//   输出: 36
//   解释: 10 = 3 + 3 + 4, 3 ×3 ×4 = 36。
// 提示:
//   2 <= n <= 58
// 标签:
//   数学, 动态规划

const testcases = [{ n: 2 }, { n: 10 }];
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = Array.from({ length: n + 1 }).fill(0);
  // 拆分成几个数    2个     2个以上
  // dp[i] = max(j * (i-j), j * dp[i-j], dp[i])
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i]);
    }
  }
  return dp[n];
};
testcases.forEach(({ n }) => {
  console.log('integerBreak(n) =>', integerBreak(n));
});
