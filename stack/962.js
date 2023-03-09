// https://leetcode.cn/problems/maximum-width-ramp/
// 难度: 中等
//
// 给定一个整数数组A，坡是元组(i, j)，其中i < j且A[i] <= A[j]。这样的坡的宽度为j - i。
// 找出A中的坡的最大宽度，如果不存在，返回 0 。
// 示例 1：
//   输入：[6,0,8,2,1,5]
//   输出：4
//   解释：
// 最大宽度的坡为 (i, j) = (1, 5): A[1] = 0 且 A[5] = 5.
// 示例 2：
//   输入：[9,8,1,0,1,9,4,0,4,1]
//   输出：7
//   解释：
// 最大宽度的坡为 (i, j) = (2, 9): A[2] = 1 且 A[9] = 1.
// 提示：
//   2 <= A.length <= 50000
//   0 <= A[i] <= 50000
// 标签:
//   栈, 数组, 单调栈

const testcases = [{ nums: [6, 0, 8, 2, 1, 5] }, { nums: [9, 8, 1, 0, 1, 9, 4, 0, 4, 1] }, { nums: [0, 1] }];
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const stack = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!stack.length || nums[stack.at(-1)] > nums[i]) {
      // 存储大于当前值的序列
      stack.push(i);
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < max) break;
    // 遍历所有可能的结果
    while (stack.length && nums[stack.at(-1)] <= nums[i]) {
      max = Math.max(max, i - stack.pop());
    }
  }
  return max;
};

testcases.forEach(({ nums }) => {
  console.log('maxWidthRamp(nums) =>', maxWidthRamp(nums));
});
