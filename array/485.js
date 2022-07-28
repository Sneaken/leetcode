// 485. 最大连续 1 的个数
// 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

const nums = [1, 0, 1, 1, 0, 1];
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let ans = 0;
  let current = 0;
  let n = nums.length;
  while (n--) {
    if (nums[n] === 1) {
      current++;
    } else {
      ans = Math.max(ans, current);
      current = 0;
    }
  }
  return Math.max(ans, current);
};

console.log('findMaxConsecutiveOnes(nums) =>', findMaxConsecutiveOnes(nums));
