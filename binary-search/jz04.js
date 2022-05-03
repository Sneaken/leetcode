const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

const target = 2;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  // 从开头进行二分是错误的行为
};

// 从二维数组的右上角找 进可攻 退可守
const findNumberIn2DArray2 = (matrix, target) => {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  let rows = matrix.length,
    columns = matrix[0].length;
  let row = 0,
    column = columns - 1;
  while (row < rows && column >= 0) {
    const num = matrix[row][column];
    if (num === target) {
      return true;
    } else if (num > target) {
      column--;
    } else {
      row++;
    }
  }
  return false;
};
console.log(findNumberIn2DArray(matrix, target));
