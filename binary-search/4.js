// https://leetcode.cn/problems/median-of-two-sorted-arrays/
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1 和nums2。请你找出并返回这两个正序数组的 中位数 。
// 算法的时间复杂度应该为 O(log (m+n)) 。
// 示例 1：
// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 提示：
// nums1.length == m
// nums2.length == n
// 0 = m = 1000
// 0 = n = 1000
// 1 = m + n = 2000
// -10^6 = nums1[i], nums2[i] = 10^6

const nums1 = [2, 3, 4],
  nums2 = [1];
/**
 * 找到中位数的位置就结束
 * 100ms
 * 46.6MB
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const length = len1 + len2;
  if (length === 0) return 0;
  if (length === 1) return nums1[0] ?? nums2[0];
  const medianIdx = [];
  const mid = Math.floor(length / 2);
  if (length % 2) {
    medianIdx.push(mid);
  } else {
    medianIdx.push(mid - 1);
    medianIdx.push(mid);
  }
  if (nums1.length === 0) {
    [nums1, nums2] = [nums2, nums1];
  }

  function getMid() {
    return medianIdx.reduce((p, n) => p + nums1[n], 0) / medianIdx.length;
  }

  if (nums2.length === 0) return getMid();

  const limit = medianIdx[1] ?? medianIdx[0];
  let left = 0,
    right = 0;
  while ((left < len1 && right < len2 && Math.max(left, right) < limit) || nums1.length < length) {
    if (nums1[left] <= nums2[right]) {
      // 找到最后一个 >= nums[right] 的 位置
      while (nums1[left] <= nums2[right]) {
        left++;
      }
      nums1.splice(left, 0, nums2[right]);
      right++;
    } else if (nums1[left] > nums2[right]) {
      const start = right;
      // 找到最后一个 <= nums[right] 的 位置
      while (nums1[left] >= nums2[right]) {
        right++;
      }
      nums1.splice(left, 0, ...nums2.slice(start, right));
    }
  }
  return getMid();
};
console.log('findMedianSortedArrays(nums1, nums2) =>', findMedianSortedArrays([...nums1], [...nums2]));

// 合并数组 找到中位数
// 92ms
// 45.7MB
function findMedianSortedArrays2() {
  let i = 0,
    j = 0,
    array = [],
    l = 0;

  for (; l < nums1.length + nums2.length; l++) {
    if (i >= nums1.length || nums1[i] > nums2[j]) {
      array[l] = nums2[j++];
    } else if (j >= nums2.length || nums1[i] <= nums2[j]) {
      array[l] = nums1[i++];
    }
  }
  return l & 1 ? array[(l / 2) | 0] : (array[l / 2] + array[l / 2 - 1]) / 2;
}
console.log('findMedianSortedArrays2(nums1, nums2) =>', findMedianSortedArrays2([...nums1], [...nums2]));

// 笔记
// 如果对时间复杂度的要求有 log，通常都需要用到二分查找

// 96ms
// 45.1MB
function findMedianSortedArrays3(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays3(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0,
    right = m;
  // median1：前一部分的最大值
  // median2：后一部分的最小值
  let median1 = 0,
    median2 = 0;

  while (left <= right) {
    // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
    // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
    const i = ((left + right) / 2) | 0;
    const j = (((m + n + 1) / 2) | 0) - i;
    // nums_im1, nums_i, nums_jm1, nums_j 分别表示 nums1[i-1], nums1[i], nums2[j-1], nums2[j]
    const nums_im1 = i === 0 ? -Infinity : nums1[i - 1];
    const nums_i = i === m ? Infinity : nums1[i];
    const nums_jm1 = j === 0 ? -Infinity : nums2[j - 1];
    const nums_j = j === n ? Infinity : nums2[j];

    if (nums_im1 <= nums_j) {
      median1 = Math.max(nums_im1, nums_jm1);
      median2 = Math.min(nums_i, nums_j);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }

  return (m + n) & 1 ? median1 : (median1 + median2) / 2;

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/258842/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/
}

console.log('findMedianSortedArrays3(nums1, nums2) =>', findMedianSortedArrays3([...nums1], [...nums2]));
