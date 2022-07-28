// 118. 杨辉三角
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
// 示例 1:
//   输入: numRows = 5
//   输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:
//   输入: numRows = 1
//   输出: [[1]]
// 提示:
//   1 <= numRows <= 30
const numRows = 5;
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [];
  for (let i = 1; i <= numRows; i++) {
    const level = [];
    level[0] = 1;
    level[i - 1] = 1;
    let left = 1;
    const lastRow = ans[i - 2];
    const mid = i % 2 === 1 ? (i + 1) / 2 : i / 2;
    while (left < mid) {
      const value = lastRow[left - 1] + lastRow[left];
      level[left] = level[i - left - 1] = value;
      left++;
    }
    ans.push(level);
  }
  return ans;
};

console.log('generate(numRows) =>', generate(numRows));
