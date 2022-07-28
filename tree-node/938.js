// https://leetcode.cn/problems/range-sum-of-bst/
// 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/11/05/bst1.jpg" style="width: 400px; height: 222px;" />
// 输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
// 输出：32
// 示例 2：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/11/05/bst2.jpg" style="width: 400px; height: 335px;" />
// 输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// 输出：23
// 提示：
// 树中节点数目在范围 [1, 2 * 10^4] 内
// 1 <= Node.val <= 10^5
// 1 <= low <= high <= 10^5
// 所有 Node.val 互不相同

import { changeArrToTreeNode } from './index.js';

const root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6],
  low = 6,
  high = 10;
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const dfs = (node) => {
    if (!node) return;
    node.val >= low && dfs(node.left);
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    node.val <= high && dfs(node.right);
  };

  dfs(root);
  return sum;
};

console.log('rangeSumBST(rootTree) =>', rangeSumBST(rootTree, low, high));
