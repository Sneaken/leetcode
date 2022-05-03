// 寻找所有的独生节点
// 二叉树中，如果一个节点是其父节点的唯一子节点，则称这样的节点为 “独生节点” 。二叉树的根节点不会是独生节点，因为它没有父节点。
//
// 给定一棵二叉树的根节点 root ，返回树中 所有的独生节点的值所构成的数组 。数组的顺序 不限 。

import {changeArrToTreeNode} from "./index.js"

const root = [11, 99, 88, 77, null, null, 66, 55, null, null, 44, 33, null, null, 22]
const rootTree = changeArrToTreeNode(root)

const getLonelyNodes = function (root) {
  const ans = []

  const dfs = (root, parent) => {
    if (!root) return
    if (parent) {
      if ((parent.left && !parent.right) || (parent.right && !parent.left)) {
        ans.push(root.val)
      }
    }

    dfs(root.left, root)
    dfs(root.right, root)
  }

  dfs(root, null)

  return ans
}

console.log(getLonelyNodes(rootTree))