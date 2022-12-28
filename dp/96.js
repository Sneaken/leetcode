// https://leetcode.cn/problems/unique-binary-search-trees/
// 难度: 中等
//
// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg" style="width: 600px; height: 148px;" />
//   输入：n = 3
//   输出：5
// 示例 2：
//   输入：n = 1
//   输出：1
// 提示：
//   1 <= n <= 19
// 标签:
//   树, 二叉搜索树, 数学, 动态规划, 二叉树

const testcases = [{ n: 3 }, { n: 1 }];
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 1. 明确 dp 数组以及下标的含义
  // dp[i] 由 i 个节点组成且节点值从 1 到 i 互不相同的 二叉搜索树 的种类数
  // 2. 递推公式
  // dp[i] = dp[i-1] + dp[]
  // 3. dp数组如何初始化
  // dp[0] = 0 ❌ 1
  const dp = Array.from({ length: n + 1 }).fill(0);
  dp[0] = 1;
  // 4. 遍历顺序
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  // 5. 出现问题 打印 dp 数组
  return dp[n];
};
testcases.forEach(({ n }) => {
  console.log('numTrees(n) =>', numTrees(n));
});
