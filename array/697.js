// 697. 数组的度
// 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
// 提示：
// nums.length 在 1 到 50,000 范围内。
// nums[i] 是一个在 0 到 49,999 范围内的整数。
const nums = [1, 2, 2, 3, 1, 4, 2];
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  if (nums.length === 1) return 1;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] ||= {
      count: 0,
      idxs: [],
    };
    map[nums[i]].count++;
    map[nums[i]].idxs.push(i);
  }

  let maxCount = Number.MIN_SAFE_INTEGER;
  let ans = Number.MAX_SAFE_INTEGER;
  for (const { count, idxs } of Object.values(map)) {
    if (count > maxCount) {
      maxCount = count;
      ans = idxs[idxs.length - 1] - idxs[0] + 1;
    } else if (count === maxCount) {
      ans = Math.min(ans, idxs[idxs.length - 1] - idxs[0] + 1);
    }
  }
  return ans;
};

console.log('findShortestSubArray(nums) =>', findShortestSubArray(nums));

// 官方题解
var findShortestSubArray2 = function (nums) {
  // 思路是一样的
  // 统计每个元素的出现次数，以及起始位置

  const mp = {};

  for (const [i, num] of nums.entries()) {
    if (num in mp) {
      mp[num][0]++;
      mp[num][2] = i;
    } else {
      mp[num] = [1, i, i];
    }
  }

  let maxNum = 0,
    minLen = 0;
  for (const [count, left, right] of Object.values(mp)) {
    if (maxNum < count) {
      maxNum = count;
      minLen = right - left + 1;
    } else if (maxNum === count) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1;
      }
    }
  }
  return minLen;
};
