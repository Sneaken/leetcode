// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

const nums = [-1, 0, 1, 2, -1, -4, -2]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  console.log('nums =>', nums)
  const ans = []
  const n = nums.length
  for (let i = 0; i < n; i++) {

    if (i != 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let j = i + 1, k = n - 1
    while (j < k) {
      const total = nums[i] + nums[j] + nums[k]
      if (total === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        console.log([nums[i], nums[j], nums[k]])
        break
      } else if (total > 0) {
        let k0 = k - 1
        while (j < k0 && nums[k0] === nums[k]) {
          k0--
        }
        k = k0
      } else if (total < 0) {
        let j0 = j + 1
        while (j0 < k && nums[j0] === nums[j0]) {
          j0++
        }
        j = j0
      }

    }
  }


  return ans

}

console.log(threeSum(nums))