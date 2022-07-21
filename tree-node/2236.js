// 2236. 判断根结点是否等于子结点之和
// 给你一个 二叉树 的根结点 root，该二叉树由恰好 3 个结点组成：根结点、左子结点和右子结点。

// 如果根结点值等于两个子结点值之和，返回 true ，否则返回 false 。

import { changeArrToTreeNode } from "./index.js";

const root = [10, 4, 6];
const rootTree = changeArrToTreeNode(root);
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
 * @return {boolean}
 */
const checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

console.log("checkTree(rootTree) =>", checkTree(rootTree));
