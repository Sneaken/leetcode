// 41. 缺失的第一个正数
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
// 示例 1：
//   输入：nums = [1,2,0]
//   输出：3
// 示例 2：
//   输入：nums = [3,4,-1,1]
//   输出：2
// 示例 3：
//   输入：nums = [7,8,9,11,12]
//   输出：1
// 提示：
//   1 <= nums.length <= 5 * 10^5
//   -2^31 <= nums[i] <= 2^31 - 1

const nums = [-1, 0, 2];
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  // 情况1: nums 是按顺序排列 即 [1,2,3,....,n], 此时最小的正数应该是 n + 1
  // 情况2: nums: [i-1,i+1,...,n], 此时最小的正数应该是i
  for (let i = 0; i < n; i++) {
    // 先排除负数
    nums[i] <= 0 && (nums[i] = n + 1);
  }
  // [-1, 0, 2】
  // [ 3, 3, 2]

  // [0, n - 1] => [1, n]
  for (let i = 0; i < n; i++) {
    const current = nums[i];
    if (current <= n) {
      const idx = Math.abs(current) - 1;
      // 保证一定是负数
      nums[idx] = -Math.abs(nums[idx]);
    }
  }
  // [3,  3,  2]
  // [3, -3, -2]
  for (let i = 0; i < n; i++) {
    // 如果 idx 位置的值 > 0, 表示 idx + 1 没有出现过
    if (nums[i] > 0) return i + 1;
  }
  // 范围内都在, 那缺少的就是 n + 1
  return n + 1;
};

console.log('firstMissingPositive(nums) =>', firstMissingPositive(nums));
