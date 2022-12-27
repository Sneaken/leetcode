// https://leetcode.cn/problems/search-insert-position/
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。
// 示例 1:
//   输入: nums = [1,3,5,6], target = 5
//   输出: 2
// 示例 2:
//   输入: nums = [1,3,5,6], target = 2
//   输出: 1
// 示例 3:
//   输入: nums = [1,3,5,6], target = 7
//   输出: 4
// 提示:
//   1 <= nums.length <= 10^4
//   -10^4 <= nums[i] <= 10^4
//   nums 为无重复元素的升序排列数组
//   -10^4 <= target <= 10^4
// 标签:
//   数组, 二分查找

const testcases = [
  { nums: [1, 3, 5, 6], target: 5 },
  { nums: [1, 3, 5, 6], target: 2 },
  { nums: [1, 3, 5, 6], target: 7 },
  { nums: [1, 3], target: 2 },
];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 找到第一个 > target 的位置
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const num = nums[mid];
    if (num === target) return mid;
    if (num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

testcases.forEach(({ nums, target }) => {
  console.log('searchInsert(nums,target) =>', searchInsert([...nums], target));
});
