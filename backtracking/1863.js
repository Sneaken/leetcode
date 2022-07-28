// 1863. 找出所有子集的异或总和再求和

/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
  let res = 0;
  const len = nums.length;
  const dfs = (val = 0, idx = 0) => {
    if (idx === len) {
      res += val;
      return;
    }
    // 考虑不选择当前数字
    dfs(val, idx + 1);
    // 考虑选择当前数字
    dfs(val ^ nums[idx], idx + 1);
  };
  dfs();
  return res;
};
console.log('subsetXORSum([1,3]) =>', subsetXORSum([5, 1, 6, 7, 8, 9]));
