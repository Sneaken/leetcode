// https://leetcode.cn/problems/partition-equal-subset-sum/
// 难度: 中等
//
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
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
  const target = sum / 2;
  const dp = Array.from({ length: target + 1 }).fill(0);
  for (let i = 1; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      //               不放，  放
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  console.log('dp =>', dp);
  return dp[target] === sum - target;
};
testcases.forEach(({ nums }) => {
  console.log('canPartition(nums) =>', canPartition(nums));
});
