// https://leetcode.cn/problems/symmetric-tree
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// 示例 1：
// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：
// 输入：root = [1,2,2,null,3,null,3]
// 输出：false
// 提示：
// 树中节点数目在范围 [1, 1000] 内
// -100 = Node.val = 100
// 进阶：你可以运用递归和迭代两种方法解决这个问题吗？

import { changeArrToTreeNode } from './index.js';

const root = [1, 2, 2, 3, 4, 4, 3];
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
var isSymmetric = function (root) {
  const check = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return check(p.left, q.right) && check(p.right, q.left);
  };
  return check(root, root);
};

var isSymmetric2 = function (root) {
  const check = (p, q) => {
    const queue = [p, q];
    while (queue.length) {
      p = queue.shift();
      q = queue.shift();
      if (!p && !q) continue;
      if (!p || !q || p.val !== q.val) return false;
      queue.push(p.left);
      queue.push(q.right);

      queue.push(p.right);
      queue.push(q.left);
    }
    return true;
  };
  return check(root, root);
};

console.log('isSymmetric(rootTree) => ', isSymmetric(rootTree));
console.log('isSymmetric2(rootTree) => ', isSymmetric2(rootTree));
