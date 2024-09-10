// https://leetcode.cn/problems/max-consecutive-ones/
// 难度: 简单
//
// 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
// 示例 1：
//   输入：nums = [1,1,0,1,1,1]
//   输出：3
//   解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
// 示例 2:
//   输入：nums = [1,0,1,1,0,1]
//   输出：2
// 提示：
//   1 <= nums.length <= 10^5
//   nums[i]不是0就是1.
// 标签:
//   数组

const testcases = [{ nums: [1, 1, 0, 1, 1, 1] }, { nums: [1, 0, 1, 1, 0, 1] }];

// 双指针的话写法应该是滑动窗口
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count = 0;
    } else {
      maxCount = Math.max(++count, maxCount);
    }
  }
  return maxCount;
};
testcases.forEach(({ nums }) => {
  console.log('findMaxConsecutiveOnes(nums) =>', findMaxConsecutiveOnes(nums));
});
