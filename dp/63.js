// https://leetcode.cn/problems/unique-paths-ii/
// 难度: 中等
//
// 一个机器人位于一个<meta charset="UTF-8" />m x n网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
// 网格中的障碍物和空位置分别用 1 和 0 来表示。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg" />
//   输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
//   输出：2
//   解释：3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右
// 示例 2：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg" />
//   输入：obstacleGrid = [[0,1],[0,0]]
//   输出：1
// 提示：
//   m ==obstacleGrid.length
//   n ==obstacleGrid[i].length
//   1 <= m, n <= 100
//   obstacleGrid[i][j] 为 0 或 1
// 标签:
//   数组, 动态规划, 矩阵

const testcases = [
  {
    obstacleGrid: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },
  {
    obstacleGrid: [
      [0, 1],
      [0, 0],
    ],
  },
];
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 1. dp 数组以及下标的含义
  // dp[x][y]: 到达 x, y 处 有多少种走法
  // 2. 递推公式
  // dp[x][y] = obstacleGrid[x][y] ? 0 : dp[x-1][y] + dp[x][y-1]
  // 3. dp 初始化
  // dp[x][0] 能走之前都是1 否则为0
  // dp[0][y] 能走之前都是1 否则为0
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }).map(() => [...Array.from({ length: n })]);
  dp[0][0] = !obstacleGrid[0][0] ? 1 : 0;
  for (let x = 1; x < m; x++) {
    dp[x][0] = dp[x - 1][0] && (!obstacleGrid[x][0] ? 1 : 0);
  }
  for (let y = 1; y < n; y++) {
    dp[0][y] = dp[0][y - 1] && (!obstacleGrid[0][y] ? 1 : 0);
  }
  // 4. 遍历顺序
  for (let x = 1; x < m; x++) {
    for (let y = 1; y < n; y++) {
      dp[x][y] = obstacleGrid[x][y] ? 0 : dp[x - 1][y] + dp[x][y - 1];
    }
  }
  // 5. 打印 dp
  return dp[m - 1][n - 1];
};
testcases.forEach(({ obstacleGrid }) => {
  console.log('uniquePathsWithObstacles(obstacleGrid) =>', uniquePathsWithObstacles(obstacleGrid));
});
