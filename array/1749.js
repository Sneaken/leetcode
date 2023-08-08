// https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/
// 难度: 中等
//
// 给你一个整数数组nums。一个子数组[numsl, numsl+1, ..., numsr-1, numsr]的和的绝对值为abs(numsl + numsl+1 + ... + numsr-1 + numsr)。
// 请你找出 nums中 和的绝对值 最大的任意子数组（可能为空），并返回该 最大值。
// abs(x)定义如下：
// 如果x是负整数，那么abs(x) = -x。
// 如果x是非负整数，那么abs(x) = x。
// 示例 1：
//   输入：nums = [1,-3,2,3,-4]
//   输出：5
//   解释：子数组 [2,3] 和的绝对值最大，为 abs(2+3) = abs(5) = 5 。
// 示例 2：
//   输入：nums = [2,-5,1,-4,3,-2]
//   输出：8
//   解释：子数组 [-5,1,-4] 和的绝对值最大，为 abs(-5+1-4) = abs(-8) = 8 。
// 提示：
//   1 <= nums.length <= 10^5
//   -10^4 <= nums[i] <= 10^4
// 标签:
//   数组, 动态规划

const testcases = [{ nums: [1, -3, 2, 3, -4, -3] }, { nums: [2, -5, 1, -4, 3, -2] }];
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAbsoluteSum = function (nums) {
  let mx = 0;
  let mn = 0;
  let s = 0;
  for (const x of nums) {
    s += x;
    // 这个x是正数
    if (s > mx) mx = s;
    // 这个x是负数
    else if (s < mn) mn = s;
  }
  return mx - mn;
};
testcases.forEach(({ nums }) => {
  console.log('maxAbsoluteSum(nums) =>', maxAbsoluteSum(nums));
});
