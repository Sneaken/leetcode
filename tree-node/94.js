// https://leetcode.cn/problems/binary-tree-inorder-traversal/
// 难度: 简单
//
// 给定一个二叉树的根节点 root ，返回 它的 中序遍历 。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="height: 200px; width: 125px;" />
//   输入：root = [1,null,2,3]
//   输出：[1,3,2]
// 示例 2：
//   输入：root = []
//   输出：[]
// 示例 3：
//   输入：root = [1]
//   输出：[1]
// 提示：
//   树中节点数目在范围 [0, 100] 内
//   -100 <= Node.val <= 100
//   进阶:递归算法很简单，你可以通过迭代算法完成吗？
// 标签:
//   栈, 树, 深度优先搜索, 二叉树

import { changeArrToTreeNode } from './index.js';

const testcases = [
  { root: changeArrToTreeNode([1, null, 2, 3]) },
  { root: changeArrToTreeNode([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]) },
  { root: changeArrToTreeNode([]) },
  { root: changeArrToTreeNode([1]) },
];
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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  // 中序遍历结果
  const res = [];
  // 当前节点
  let cur = root;
  // 栈
  const stack = [];
  while (cur || stack.length) {
    while (cur) {
      // 遍历到最左节点
      stack.push(cur);
      cur = cur.left;
    }
    // 弹出栈顶元素
    cur = stack.pop();
    // 访问节点
    res.push(cur.val);
    // 遍历右子树
    cur = cur.right;
  }
  return res;
};
testcases.forEach(({ root }) => {
  console.log('inorderTraversal(root) =>', inorderTraversal(root));
});

function inorderTraversal2(root) {
  const getValue = (root, values = []) => {
    if (!root) return values;
    getValue(root.left, values);
    values.push(root.val);
    getValue(root.right, values);
    return values;
  };
  return getValue(root);
}

testcases.forEach(({ root }) => {
  console.log('inorderTraversal2(root) =>', inorderTraversal2(root));
});
