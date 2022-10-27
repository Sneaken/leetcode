// https://leetcode.cn/problems/sudoku-solver/
// 编写一个程序，通过填充空格来解决数独问题。
// 数独的解法需 遵循如下规则：
// 数字1-9在每一行只能出现一次。
// 数字1-9在每一列只能出现一次。
// 数字1-9在每一个以粗实线分隔的3x3宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用'.'表示。
// <div class="top-view__1vxA">
// <div class="original__bRMd">
// 示例 1：
// <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png" style="height:250px; width:250px" />
// 输入：board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// 输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// 解释：输入的数独如上图所示，唯一有效的解决方案如下所示：
// <img src=" https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714_solutionsvg.png" style="height:250px; width:250px" />
// 提示：
// board.length == 9
// board[i].length == 9
// board[i][j] 是一位数字或者 '.'
// 题目数据 保证 输入数独仅有一个解

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 查看有多少未填写的内容
  const spaces = [];
  // 每行的状态
  // boolean[][]
  const line = Array(9)
    .fill(0)
    .map((_) => Array(9).fill(false));
  // 每一列的状态
  const column = Array(9)
    .fill(0)
    .map((_) => Array(9).fill(false));
  // 每一块九宫格的状态
  const block = Array(3)
    .fill(0)
    .map((_) =>
      Array(3)
        .fill(0)
        .map((_) => Array(9).fill(false))
    );
  let valid = false;

  // 初始化状态
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] === '.') {
        spaces.push([i, j]);
      } else {
        const digit = board[i][j] - 1;
        const idx = (i / 3) | 0;
        const idy = (j / 3) | 0;
        line[i][digit] = column[j][digit] = block[idx][idy][digit] = true;
      }
    }
  }

  // 开始遍历
  const dfs = (board, pos) => {
    if (pos === spaces.length) {
      valid = true;
      return;
    }

    const [i, j] = spaces[pos];
    for (let digit = 0; digit < 9 && !valid; ++digit) {
      const idx = (i / 3) | 0;
      const idy = (j / 3) | 0;
      if (!line[i][digit] && !column[j][digit] && !block[idx][idy][digit]) {
        line[i][digit] = column[j][digit] = block[idx][idy][digit] = true;
        board[i][j] = String(digit + 1);
        dfs(board, pos + 1);
        // 回溯
        line[i][digit] = column[j][digit] = block[idx][idy][digit] = false;
      }
    }
  };

  dfs(board, 0);
};

solveSudoku(board);
