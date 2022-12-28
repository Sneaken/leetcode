// https://leetcode.cn/problems/partition-equal-subset-sum/
// 难度: 中等
//
// 给你一个 只包含正整数 的 非空 数组nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
// 示例 1：
//   输入：nums = [1,5,11,5]
//   输出：true
//   解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 示例 2：
//   输入：nums = [1,2,3,5]
//   输出：false
//   解释：数组不能分割成两个元素和相等的子集。
// 提示：
//   1 <= nums.length <= 200
//   1 <= nums[i] <= 100
// 标签:
//   数组, 动态规划

const testcases = [{ nums: [1, 5, 11, 5] }, { nums: [1, 2, 3, 5] }];
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((t, n) => t + n, 0);
  if (sum % 2) return false;
  // 1. 明确 dp 数组以及下标的含义
  // dp[j]: 容量为 j 的时候的最大价值
  // 2. 递推公式
  // dp[j] = max(dp[j], dp[j - weight[i] + values[i]]
  // 3. dp数组如何初始化
  const target = sum / 2;
  const dp = Array.from({ length: target + 1 }).map(() => 0);
  // 4. 遍历顺序
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  // 5. 出现问题 打印 dp 数组
  // console.log('dp =>', dp);
  return dp[target] === target;
};
testcases.forEach(({ nums }) => {
  console.log('canPartition(nums) =>', canPartition(nums));
});
