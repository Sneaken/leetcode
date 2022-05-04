// 448. 找到所有数组中消失的数字
// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
// 示例 1：
//   输入：nums = [4,3,2,7,8,2,3,1]
//   输出：[5,6]
// 示例 2：
//   输入：nums = [1,1]
//   输出：[2]
// 提示：
//   n == nums.length
//   1 <= n <= 105
//   1 <= nums[i] <= n
// 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  const ans = [0]
  for (let i = 1; i <= n; i++) {
    ans[i] = i
  }
  for (let i = 0; i < n; i++) {
    ans[nums[i]] = 0
  }
  ans.length = n + 1
  ans.shift()
  return ans.filter((item) => item !== 0)
}

console.log('findDisappearedNumbers(nums) =>', findDisappearedNumbers(nums))

var findDisappearedNumbers2 = function (nums) {
  // 说白了 因为是区间是[1,n], 所以可以看成映射到 [0, n - 1]
  // 再将对应位置映射成负数，那么余下正数对应的 index + 1 就是 缺少的值
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let x = Math.abs(nums[i])
    let idx = x - 1
    nums[idx] = 0 - Math.abs(nums[idx])
  }
  let result = []
  console.log('nums =>', nums)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
}

console.log('findDisappearedNumbers2(nums) =>', findDisappearedNumbers2(nums))