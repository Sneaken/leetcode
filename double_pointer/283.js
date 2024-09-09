// https://leetcode.cn/problems/move-zeroes/
// 难度: 简单
//
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意，必须在不复制数组的情况下原地对数组进行操作。
// 示例 1:
//   输入: nums = [0,1,0,3,12]
//   输出: [1,3,12,0,0]
// 示例 2:
//   输入: nums = [0]
//   输出: [0]
// 提示:
//   <meta charset="UTF-8" />
//   1 <= nums.length <= 10^4
//   -2^31<= nums[i] <= 2^31- 1
//   进阶：你能尽量减少完成的操作次数吗？
// 标签:
//   数组, 双指针

const testcases = [{ nums: [0, 1, 0, 3, 12] }, { nums: [0] }];
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  // [slow, fast] 为 0 的 区间
  let left = -1;
  let right = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (left === -1) {
        left = i;
      }
      right = i;
    } else {
      if (left !== -1) {
        [nums[left], nums[i]] = [nums[i], nums[left]];
        left++;
        right++;
      }
    }
  }

  return nums;
};
testcases.forEach(({ nums }) => {
  console.log('moveZeroes(nums) =>', moveZeroes(nums));
});
