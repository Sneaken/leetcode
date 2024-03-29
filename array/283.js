// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
//
// 示例 1:
//   输入: nums = [0,1,0,3,12]
//   输出: [1,3,12,0,0]
// 示例 2:
//   输入: nums = [0]
//   输出: [0]
// 提示:
//   1 <= nums.length <= 104
//   -2^31 <= nums[i] <= 2^31- 1
//
// 进阶：你能尽量减少完成的操作次数吗？

const nums = [1, 3, 0, 7, 8, 5, 0, 0, 3, 4, 5, 6, 0];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  let count = 0;
  while (n--) {
    if (nums[n] === 0) {
      nums.splice(n, 1);
      count++;
      n++;
    }
  }
  while (count--) {
    nums.push(0);
  }
  console.log('nums =>', nums);
};

var moveZeroes = function (nums) {
  let n = nums.length;
  let left = 0,
    right = 0;
  while (right < n) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  console.log('nums =>', nums);
};
moveZeroes(nums);
