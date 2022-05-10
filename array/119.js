// 119. 杨辉三角 II
// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
// 示例 1:
//   输入: rowIndex = 3
//   输出: [1,3,3,1]
// 示例 2:
//   输入: rowIndex = 0
//   输出: [1]
// 示例 3:
//   输入: rowIndex = 1
//   输出: [1,1]
// 提示:
//   0 <= rowIndex <= 33

const rowIndex = 4
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]
  const level = []
  level[0] = 1
  level[rowIndex] = 1
  const lastRow = getRow(rowIndex - 1)
  let left = 1
  const mid = rowIndex % 2 === 1 ? (rowIndex - 1) / 2 : rowIndex / 2
  while (left <= mid) {
    level[left] = level[rowIndex - left] = lastRow[left - 1] + lastRow[left]
    left++
  }
  return level
}

console.log('getRow =>', getRow(rowIndex))


var getRow = function (rowIndex) {
  const row = new Array(rowIndex + 1).fill(0)
  row[0] = 1
  for (let i = 1; i <= rowIndex; ++i) {
    row[i] = row[i - 1] * (rowIndex - i + 1) / i
  }
  return row
}
