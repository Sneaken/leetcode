// 628. 三个数的最大乘积
// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
// 提示：
// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

const nums = [3, 4, 0, 0, -1, -5];
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
  const fn = (list) => {
    return list.reduce((p, c) => p * c);
  };
  if (nums.length === 3) return fn(nums);
  const ans = nums.sort((a, b) => b - a);
  const first = ans[0];
  const lastOne = ans[ans.length - 1];
  const beforeLastOne = ans[ans.length - 2];
  return Math.max(fn([first, lastOne, beforeLastOne]), fn(ans.slice(0, 3)));
};

console.log('maximumProduct(nums) =>', maximumProduct(nums));

// 官方题解
var maximumProduct2 = function (nums) {
  // 最小的和第二小的
  let min1 = Number.MAX_SAFE_INTEGER,
    min2 = Number.MAX_SAFE_INTEGER;
  // 最大的、第二大的和第三大的
  let max1 = -Number.MAX_SAFE_INTEGER,
    max2 = -Number.MAX_SAFE_INTEGER,
    max3 = -Number.MAX_SAFE_INTEGER;

  for (const x of nums) {
    if (x < min1) {
      min2 = min1;
      min1 = x;
    } else if (x < min2) {
      min2 = x;
    }

    if (x > max1) {
      max3 = max2;
      max2 = max1;
      max1 = x;
    } else if (x > max2) {
      max3 = max2;
      max2 = x;
    } else if (x > max3) {
      max3 = x;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
