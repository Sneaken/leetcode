// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回[-1, -1]。
// 你必须设计并实现时间复杂度为O(log n)的算法解决此问题。
// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例2：
// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：
// 输入：nums = [], target = 0
// 输出：[-1,-1]
// 提示：
// 0 = nums.length = 10^5
// -10^9= nums[i]= 10^9
// nums是一个非递减数组
// -10^9= target= 10^9

// 标签: 数组,二分查找
const testcases = [
  {
    nums: [5, 7, 7, 8, 8, 10],
    target: 8,
  },
  {
    nums: [5, 7, 7, 8, 8, 10],
    target: 6,
  },
  {
    nums: [5, 7, 7, 8, 8, 10],
    target: 10,
  },
  {
    nums: [],
    target: 0,
  },
];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function findTarget(nums, target, flag) {
    let left = 0,
      right = nums.length - 1,
      ans = nums.length;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] > target || (flag && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }

  // 等于 target 的数的下标
  const left = findTarget(nums, target, true);
  // 第一个大于 target 的数的下标 - 1
  const right = findTarget(nums, target, false) - 1;
  if (left <= right && right < nums.length && nums[left] === target && nums[right] === target) return [left, right];
  return [-1, -1];
};
testcases.map(({ nums, target }) => {
  console.log('searchRange(nums,target) =>', searchRange(nums, target));
});
