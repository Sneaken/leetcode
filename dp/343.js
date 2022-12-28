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
  // 1. dp 数组的含义
  // dp[i]: 对 i 进行拆分的积的最大值
  // 2. 递推公式
  //             拆成2个数   3个数及以上
  // dp[i] = max(j * (i-j), j * dp[i-j], dp[i])
  // 3. dp 初始化
  // dp[0] = 0
  // dp[1] = 0
  // dp[2] = 1
  // 4. 遍历顺序
  if (n <= 1) return 0;
  if (n === 2) return 1;
  const dp = Array.from({ length: n + 1 }).map((_) => 0);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i]);
    }
  }
  // 5. 打印 dp
  return dp[n];
};
testcases.forEach(({ n }) => {
  console.log('integerBreak(n) =>', integerBreak(n));
});
