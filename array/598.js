// 598. 范围求和 II
// 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
// 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
// 示例 1:
//   输入: m = 3, n = 3，ops = [[2,2],[3,3]]
//   输出: 4
//   解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
// 示例 2:
//   输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
//   输出: 4
// 示例 3:
//   输入: m = 3, n = 3, ops = []
//   输出: 9
// 提示:
//   0 <= ops.length <= 104
//   ops[i].length == 2
//   1 <= ai <= m
//   1 <= bi <= n

const m = 39999, n = 39999, ops = [[19999, 19999]]
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let mina = m, minb = n
  for (const [ai, bi] of ops) {
    mina = Math.min(mina, ai)
    minb = Math.min(minb, bi)
  }
  return mina * minb
}

console.log('maxCount(m,n,ops) =>', maxCount(m, n, ops))