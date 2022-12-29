// https://leetcode.cn/problems/last-stone-weight-ii/
// 难度: 中等
//
// 有一堆石头，用整数数组stones 表示。其中stones[i] 表示第 i 块石头的重量。
// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为x 和y，且x <= y。那么粉碎的可能结果如下：
// 如果x == y，那么两块石头都会被完全粉碎；
// 如果x != y，那么重量为x的石头将会完全粉碎，而重量为y的石头新重量为y-x。
// 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。
// 示例 1：
//   输入：stones = [2,7,4,1,8,1]
//   输出：1
//   解释：
// 组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
// 组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
// 组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
// 组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
// 示例 2：
//   输入：stones = [31,26,33,21,40]
//   输出：5
// 提示：
//   1 <= stones.length <= 30
//   1 <= stones[i] <= 100
// 标签:
//   数组, 动态规划

const testcases = [{ stones: [2, 7, 4, 1, 8, 1] }, { stones: [31, 26, 33, 21, 40] }];
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((t, n) => t + n, 0);
  const target = Math.floor(sum / 2);
  const dp = Array.from({ length: target + 1 }).fill(0);
  for (let i = 1; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return sum - 2 * dp[target];
};
testcases.forEach(({ stones }) => {
  console.log('lastStoneWeightII(stones) =>', lastStoneWeightII(stones));
});
