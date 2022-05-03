// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

const nums = [-2, 0, 0, 2, 2]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  // 排序 + 双指针
  nums.sort((a, b) => a - b)
  const ans = []
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1, k = n - 1
    while (j < k) {
      const total = nums[i] + nums[j] + nums[k]
      if (total === 0) {
        ans.push([nums[i], nums[j], nums[k]])
        let j0 = j + 1, k0 = k - 1
        while (j0 < k && nums[j0] === nums[j]) j0++
        while (j < k0 && nums[k0] === nums[k]) k0--
        j = j0
        k = k0
      } else if (total > 0) {
        k--
      } else if (total < 0) {
        j++
      }
    }
  }
  return ans
}

console.log(threeSum(nums))