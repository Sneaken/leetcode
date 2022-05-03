// 113. 路径总和 II
// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
//
// 叶子节点 是指没有子节点的节点。

import {changeArrToTreeNode} from "./index.js"

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
const rootTree = changeArrToTreeNode(root)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
  const res = []
  if (!root) return res

  const path = []
  let sum = 0

  const dfs = (node) => {
    if (!node) return
    path.push(node.val)
    sum += node.val
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        res.push([...path])
      }
    }

    dfs(node.left)
    dfs(node.right)

    // 左右两边都走完了 才需要 后退
    path.pop()
    sum -= node.val

  }

  dfs(root)
  return res
}

console.log('pathSum(rootTree, targetSum) =>', pathSum(rootTree, targetSum))