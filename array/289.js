// 289. 生命游戏
// 根据 百度百科 ， 生命游戏 ，简称为 生命 ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。
// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： 1 即为 活细胞 （live），或 0 即为 死细胞 （dead）。
// 每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
// 下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

// 生成一个随机整数
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


const rows = getRandomInt(5, 5)
const cols = getRandomInt(5, 5)

const board = []
for (let i = 0; i < rows; i++) {
  board[i] = []
  for (let j = 0; j < cols; j++) {
    board[i][j] = getRandomInt(0, 1)
  }
}
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  // 方法一：
  const boardOfCopy = [...board.map(row => [...row])], rows = board.length, cols = board[0].length
  const getNeighborOfAlive = (x, y) => {
    const map = {
      'leftTop': board?.[x - 1]?.[y - 1],
      'top': board?.[x]?.[y - 1],
      'rightTop': board?.[x + 1]?.[y - 1],
      'left': board?.[x - 1]?.[y],
      'right': board?.[x + 1]?.[y],
      'leftBottom': board?.[x - 1]?.[y + 1],
      'bottom': board?.[x]?.[y + 1],
      'rightBottom': board?.[x + 1]?.[y + 1],
    }
    return Object.values(map).filter(v => v === 1).length
  }
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      const count = getNeighborOfAlive(x, y)
      if (board[x][y] === 1) {
        // 活细胞
        if (count < 2) {
          // 规则1：如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
          boardOfCopy[x][y] = 0
        } else if (count === 2 || count === 3) {
          // 规则2：如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
        } else {
          // 规则3：如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
          boardOfCopy[x][y] = 0
        }
      } else if (board[x][y] === 0) {
        // 死细胞
        // 如果死细胞周围正好有三个活细胞，则该位置死细胞复活
        if (count === 3) {
          boardOfCopy[x][y] = 1
        }
      }
    }
  }
  boardOfCopy.forEach((row, x) => {
    row.forEach((value, y) => {
      board[x][y] = value
    })
  })
  board.forEach(b => console.log(b.map(v => v === 0 ? ' ' : '*').join(' ')))
  console.log('board =>', board)
}

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])

const gameOfLife2 = function (board) {
  // 方法二：
  // 将原数组修改为其他中间值
  // 最后遍历重新赋值
  // 0 死亡
  // 1 存活
  // 2 活 -> 死
  // 3 死 -> 活
  const getNeighborOfAlive = (x, y) => {
    const map = {
      'leftTop': board?.[x - 1]?.[y - 1],
      'top': board?.[x]?.[y - 1],
      'rightTop': board?.[x + 1]?.[y - 1],
      'left': board?.[x - 1]?.[y],
      'right': board?.[x + 1]?.[y],
      'leftBottom': board?.[x - 1]?.[y + 1],
      'bottom': board?.[x]?.[y + 1],
      'rightBottom': board?.[x + 1]?.[y + 1],
    }
    return Object.values(map).filter(v => v === 1 || v === 2).length
  }
  board.forEach((rows, x) => {
    rows.forEach((val, y) => {
      const count = getNeighborOfAlive(x, y)
      if (val === 1) {
        // 活细胞
        if (count < 2) {
          // 规则1：如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
          board[x][y] = 2
          console.log('board[x][y] < 2 =>', board[x][y])
        } else if (count === 2 || count === 3) {
          // 规则2：如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
        } else {
          // 规则3：如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
          board[x][y] = 2
          console.log('board[x][y] > 3 =>', board[x][y])
        }
      } else if (val === 0) {
        // 死细胞
        // 如果死细胞周围正好有三个活细胞，则该位置死细胞复活
        if (count === 3) {
          board[x][y] = 3
        }
      }
    })
  })
  board.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value === 2) {
        board[x][y] = 0
      } else if (value === 3) {
        board[x][y] = 1
      }
    })
  })
  console.log('board =>', board)
  board.forEach(b => console.log(b.map(v => v === 0 ? ' ' : '*').join(' ')))
}

gameOfLife2([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])