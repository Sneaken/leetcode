const nums = [1, 3, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

const maxSlidingWindow = function (nums, k) {
  const result = [];
  const queue = [nums[0]];
  for (let i = 1; i < k; i++) {
    if (nums[i] >= nums[i - 1]) {
      queue.unshift(nums[i]);
    } else {
      queue.push(nums[i]);
    }
    console.log(queue);
  }
  return result;
};

console.log(maxSlidingWindow(nums, k));
// const res = [];
// let right = k - 1;
// let maxIndex = 0;
// for (let i = 0; i <= right; i++) {
//   if (nums[i] > nums[maxIndex]) {
//     maxIndex = i;
//   }
// }
// right++;
// res.push(nums[maxIndex]);
// let left = right - k + 1;
// while (right < nums.length) {
//   if (maxIndex >= left && maxIndex <= right) {
//     // 最大值在这个窗口中
//     if (nums[right] > nums[maxIndex]) {
//       maxIndex = right;
//     }
//     res.push(nums[maxIndex]);
//   } else {
//     // 最大值不在这个窗口中
//     maxIndex = left;
//     for (let j = left; j <= right; j++) {
//       if (nums[j] > nums[maxIndex]) {
//         maxIndex = j;
//       }
//     }
//     res.push(nums[maxIndex]);
//   }
//   left++;
//   right++;
// }
// return res;
