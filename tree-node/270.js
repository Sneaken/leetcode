// 270. 最接近的二叉搜索树值
// 给定一个不为空的二叉搜索树和一个目标值 target，请在该二叉搜索树中找到最接近目标值 target 的数值。

import {changeArrToTreeNode} from "./index.js"

const root = [2, 1, 3], target = 0.142857
const rootTree = changeArrToTreeNode(root)
const closestValue = function (root, target) {
  let closest = root.val
  let diff = Math.abs(target - closest)
  const dfs = (root) => {
    if (!root) return
    if (Math.abs(target - root.val) <= diff) {
      diff = Math.abs(target - root.val)
      closest = root.val
    }
    dfs(root.left)
    dfs(root.right)

  }
  dfs(root)
  return closest
}


// 解题思路
// 定义当前节点值val、最小差值时的节点值closest
// 如果当前差值比之前的最小差值还要小，更新closest
// target小于当前值，遍历左子树，否则遍历右子树
const closestValue = (root, target) => {
  // 定义当前节点值val、最小差值时的节点值closest
  let val,
    closest = root.val
  while (root !== null) {
    // 更新当前值
    val = root.val
    // 如果当前差值比之前的最小差值还要小，更新closest
    closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest
    // target小于当前值，遍历左子树，否则遍历右子树
    root = target < val ? root.left : root.right
  }
  return closest
}
