// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
// 难度: 简单
//
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 示例 1：
//   输入：[7,1,5,3,6,4]
//   输出：5
//   解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
// 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：
//   输入：prices = [7,6,4,3,1]
//   输出：0
//   解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
// 提示：
//   1 <= prices.length <= 10^5
//   0 <= prices[i] <= 10^4
// 标签:
//   数组, 动态规划

const testcases = [{ prices: [7, 1, 5, 3, 6, 4] }, { prices: [7, 6, 4, 3, 1] }];
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1. 明确 dp 的含义
  // dp[i][0]: 第 i 天 持有股票的最大现金
  // dp[i][1]: 第 i 天 不持有股票的最大现金
  // 2. 递推公式
  // 继续持有 或者 买入股票
  // dp[i][0] = max(dp[i-1][0], -prices[i])
  // 继续不持有 或者 卖出股票
  // dp[i][1] = max(dp[i-1][1], dp[i-1][0] + prices[i])
  // 3. 初始化
  // dp[0][0] = -prices[0]
  // dp[0][1] = 0
  const dp = Array.from({ length: prices.length }).map(() => []);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  // 4. 遍历
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  // 5. 打印 dp
  // 一定是最后一天非持有的现金多
  return dp[prices.length - 1][1];
};
testcases.forEach(({ prices }) => {
  console.log('maxProfit(prices) =>', maxProfit(prices));
});
