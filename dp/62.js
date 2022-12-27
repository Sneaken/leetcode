// https://leetcode.cn/problems/unique-paths/
// 难度: 中等
//
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？
// 示例 1：
// <img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" />
//   输入：m = 3, n = 7
//   输出：28
// 示例 2：
//   输入：m = 3, n = 2
//   输出：3
//   解释：
//     从左上角开始，总共有 3 条路径可以到达右下角。
//     1. 向右 -> 向下 -> 向下
//     2. 向下 -> 向下 -> 向右
//     3. 向下 -> 向右 -> 向下
// 示例 3：
//   输入：m = 7, n = 3
//   输出：28
// 示例 4：
//   输入：m = 3, n = 3
//   输出：6
// 提示：
//   1 <= m, n <= 100
//   题目数据保证答案小于等于 2 * 10^9
// 标签:
//   数学, 动态规划, 组合数学

const testcases = [
  { m: 3, n: 7 },
  { m: 3, n: 2 },
  { m: 1, n: 2 },
  { m: 1, n: 1 },
];
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 1. 明确 dp 数组以及其下标的含义
  // dp[x][y] 到达 x,y 位置有多少中方式
  // 2. 递推公式
  // dp[x][y] = dp[x-1][y] + dp[x][y-1]
  // 3. dp 初始化
  // dp[0][0] = 0
  // dp[0][1] = 1; ❌  dp[0][y] = 1;
  // dp[1][0] = 1; ❌  dp[x][0] = 1;
  const dp = Array.from({ length: m }).map(() => [...Array.from({ length: n })]);
  dp[0][0] = 1;
  if (n > 1) {
    dp[0][1] = 1;
  }
  if (m > 1) {
    dp[1][0] = 1;
  }
  // 4. 遍历
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (x >= 1 && y >= 1) {
        dp[x][y] = dp[x - 1][y] + dp[x][y - 1];
      } else if (x > 1) {
        dp[x][y] = dp[x - 1][y];
      } else if (y > 1) {
        dp[x][y] = dp[x][y - 1];
      }
    }
  }
  // 5. 打印 dp
  return dp[m - 1][n - 1];
};
testcases.forEach(({ m, n }) => {
  console.log('uniquePaths(m,n) =>', uniquePaths(m, n));
});
