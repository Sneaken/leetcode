// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// 难度: 简单
//
// 给你一个 非严格递增排列 的数组 nums ，请你<a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
// 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
// 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums的其余元素与 nums 的大小不重要。
// 返回 k。
// 判题标准:
// 系统会用下面的代码来测试你的题解:
// int[] nums = [...]; //   输入数组
// int[] expectedNums = [...]; // 长度正确的期望答案
// int k = removeDuplicates(nums); // 调用
// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
// assert nums[i] == expectedNums[i];
// }
// 如果所有断言都通过，那么您的题解将被 通过。
// <strong class="example">示例 1：
//   输入：nums = [1,1,2]
//   输出：2, nums = [1,2,_]
//   解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
// <strong class="example">示例 2：
//   输入：nums = [0,0,1,1,1,2,2,3,3,4]
//   输出：5, nums = [0,1,2,3,4]
//   解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
// 提示：
//   1 <= nums.length <= 3 * 10^4
//   -10^4 <= nums[i] <= 10^4
//   nums 已按 非严格递增排列
// 标签:
//   数组, 双指针

const testcases = [{ nums: [1, 1, 2] }, { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] }];
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 1) return 1;
  let count = 1;
  let left = 0;
  const total = nums.length;
  for (let right = 1; right < total; right++) {
    if (nums[left] !== nums[right]) {
      count++;
      nums[++left] = nums[right];
    }
  }
  nums.splice(count - 1, total - count);
  console.log('nums => ', nums);
  return count;
};
testcases.forEach(({ nums }) => {
  console.log('removeDuplicates(nums) =>', removeDuplicates(nums));
});
