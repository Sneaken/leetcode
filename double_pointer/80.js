// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/
// 难度: 中等
//
// 给你一个有序数组 nums ，请你<a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 <a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地 修改  输入数组 并在使用 O(1) 额外空间的条件下完成。
// 说明：
// 为什么返回数值是整数，但  输出的答案是数组呢？
// 请注意，  输入数组是以「引用」方式传递的，这意味着在函数里修改  输入数组对于调用者是可见的。
// 你可以想象内部操作如下:
// // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
// int len = removeDuplicates(nums);
// // 在函数里修改  输入数组对于调用者是可见的。
// // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
// for (int i = 0; i < len; i++) {
// print(nums[i]);
// }
// 示例 1：
//   输入：nums = [1,1,1,2,2,3]
//   输出：5, nums = [1,1,2,2,3]
//   解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。
// 示例 2：
//   输入：nums = [0,0,1,1,1,1,2,3,3]
//   输出：7, nums = [0,0,1,1,2,3,3]
//   解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。
// 提示：
//   1 <= nums.length <= 3 * 10^4
//   -10^4 <= nums[i] <= 10^4
//   nums 已按升序排列
// 标签:
//   数组, 双指针

const testcases = [{ nums: [1, 1, 1, 2, 2, 3] }, { nums: [0, 0, 1, 1, 1, 1, 2, 3, 3] }];
/**
 * 67ms击败72.96%
 * 52.48MB击败24.74%
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  // 第一次出现的下标
  let left = 0;
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[left] === nums[i]) {
      count++;
      if (count > 2) {
        nums.splice(i, 1);
        count--;
      } else {
        i++;
      }
    } else {
      left = i++;
      count = 1;
    }
  }
  console.log('nums 1=> ', nums);
  return nums.length;
};

/**
 * 54ms 击败 99.58%
 * 52.37MB 击败 66.25%
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = function (nums) {
  // 注意双指针的初始位置
  if (nums.length <= 2) return nums.length;
  let left = 2;
  for (let right = 2; right < nums.length; right++) {
    if (nums[left - 2] !== nums[right]) {
      nums[left++] = nums[right];
    }
  }
  nums.length = left;
  return left;
};

testcases.forEach(({ nums }) => {
  // console.log('removeDuplicates(nums) =>', removeDuplicates(nums));
  console.log('removeDuplicates(nums) =>', removeDuplicates([...nums]) === removeDuplicates2([...nums]));
});
