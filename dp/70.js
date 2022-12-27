// https://leetcode.cn/problems/climbing-stairs/
// 难度: 简单
//
// 假设你正在爬楼梯。需要 n阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 示例 1：
//   输入：n = 2
//   输出：2
//   解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：
//   输入：n = 3
//   输出：3
//   解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶
// 提示：
//   1 <= n <= 45
// 标签:
//   记忆化搜索, 数学, 动态规划

const testcases = [{ n: 2 }, { n: 3 }, { n: 4 }];
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1. dp[n] n阶楼梯有几种方式上去
  // 2. 递推公式: dp[i] = dp[i - i] + dp[i - 2]
  // 3. dp 初始化
  const dp = [0, 1, 2];
  if (n < 2) return dp[n];
  // 4. 遍历
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  // 5. 打印 dp 数组
  return dp[n];
};
testcases.forEach(({ n }) => {
  console.log('climbStairs(n) =>', climbStairs(n));
});
