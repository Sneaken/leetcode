// 54. 螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 示例 1：
// 输入：matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// 输出：[1,2,3,6,9,8,7,4,5]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  const ans = [];
  let x = 0,
    y = 0;
  let step = m * n;
  let direction = '👉';
  let endY = n - 1,
    endX = m - 1,
    startX = 0,
    startY = 0;
  while (step--) {
    ans.push(matrix[x][y]);
    switch (direction) {
      case '👉':
        y++;
        if (y === endY) {
          direction = '👇';
          startX++;
        }
        break;
      case '👇':
        x++;
        if (x === endX) {
          direction = '👈';
          endY--;
        }
        break;
      case '👈':
        y--;
        if (y === startY) {
          direction = '👆';
          endX--;
        }
        break;
      case '👆':
        x--;
        if (x === startX) {
          direction = '👉';
        }
        break;
    }
  }
  return ans;
};

console.log('spiralOrder(matrix) =>', spiralOrder(matrix));
