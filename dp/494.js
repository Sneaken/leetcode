// https://leetcode.cn/problems/target-sum/
// 难度: 中等
//
// 给你一个整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
// 示例 1：
//   输入：nums = [1,1,1,1,1], target = 3
//   输出：5
//   解释：一共有 5 种方法让最终目标和为 3 。
//   -1 + 1 + 1 + 1 + 1 = 3
//   +1 - 1 + 1 + 1 + 1 = 3
//   +1 + 1 - 1 + 1 + 1 = 3
//   +1 + 1 + 1 - 1 + 1 = 3
//   +1 + 1 + 1 + 1 - 1 = 3
// 示例 2：
//   输入：nums = [1], target = 1
//   输出：1
// 提示：
//   1 <= nums.length <= 20
//   0 <= nums[i] <= 1000
//   0 <= sum(nums[i]) <= 1000
//   -1000 <= target <= 1000
// 标签:
//   数组, 动态规划, 回溯

const testcases = [
  { nums: [1, 1, 1, 1, 1], target: 3 },
  { nums: [1], target: 1 },
  { nums: [100], target: -200 },
];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((t, n) => t + n, 0);
  if (target > sum) return 0;
  if ((sum + target) % 2) return 0;
  const _target = (sum + target) / 2;
  if (_target < 0) return 0;
  const dp = Array.from({ length: _target + 1 }).map(() => 0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = _target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[_target];
};
testcases.forEach(({ nums, target }) => {
  console.log('findTargetSumWays(nums,target) =>', findTargetSumWays(nums, target));
});
