// 414. 第三大的数
// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

const nums = [2, 2, 3, 1]
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const ans = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
  for (let i = 0; i < nums.length; i++) {
    const m1 = ans[0]
    const m2 = ans[1]
    const m3 = ans[2]
    const current = nums[i]
    if (current > m1) {
      ans.splice(0, 0, current)
    } else if (current > m2 && current < m1) {
      ans.splice(1, 0, current)
    } else if (current > m3 && current < m2) {
      ans.splice(2, 0, current)
    }
    ans.length = 3
  }

  return ans[2] === Number.MIN_SAFE_INTEGER ? ans[0] : ans[2]
}
console.log('thirdMax([2,2,3,1]) =>', thirdMax(nums))