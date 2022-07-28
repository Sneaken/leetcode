// 16. 最接近的三数之和
//
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。
const nums = [1, 1, 1, 1],
  target = 4;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  // 暴力解
  const len = nums.length;
  let closest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < len - 2; i++) {
    const x = nums[i];
    for (let j = i + 1; j < len - 1; j++) {
      const y = nums[j];
      for (let k = j + 1; k < len; k++) {
        const z = nums[k];
        const total = x + y + z;
        if (Math.abs(target - total) < Math.abs(target - closest)) {
          closest = total;
        }
      }
    }
  }
  return closest;
};

// console.log('threeSumClosest(nums, target) =>', threeSumClosest(nums, target))

const threeSumClosest2 = function (nums, target) {
  // 我们首先考虑枚举第一个元素 a，对于剩下的两个元素 b 和 c，我们希望它们的和最接近 target−a。
  // 对于 b 和 c，如果它们在原数组中枚举的范围（既包括下标的范围，也包括元素值的范围）没有任何规律可言，那么我们还是只能使用两重循环来枚举所有的可能情况。
  // 因此，我们可以考虑对整个数组进行升序排序，这样一来：
  // 假设数组的长度为 n，我们先枚举 a，它在数组中的位置为 i；
  // 为了防止重复枚举，我们在位置 [i+1,n) 的范围内枚举 b 和 c。
  let closest = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // 保证和上一次枚举的元素不相等
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let pb = i + 1,
      pc = n - 1;
    while (pb < pc) {
      const total = nums[i] + nums[pb] + nums[pc];
      if (total === target) return total;
      if (Math.abs(target - total) < Math.abs(target - closest)) {
        closest = total;
      }

      if (total > target) {
        let pct = pc - 1;
        // 移动到下一个不相等的元素
        while (pb < pct && nums[pct] === nums[pc]) {
          pct--;
        }
        pc = pct;
      } else {
        let pbt = pb + 1;
        // 移动到下一个不相等的元素
        while (pbt < pc && nums[pbt] === nums[pb]) {
          pbt++;
        }
        pb = pbt;
      }
    }
  }
  return closest;
};

console.log('threeSumClosest2(nums, target) =>', threeSumClosest2(nums, target));
