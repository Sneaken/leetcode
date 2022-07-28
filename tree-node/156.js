// 156. 上下翻转二叉树
// 给你一个二叉树的根节点 root ，请你将此二叉树上下翻转，并返回新的根节点。
//
// 你可以按下面的步骤翻转一棵二叉树：
//
// 原来的左子节点变成新的根节点
// 原来的根节点变成新的右子节点
// 原来的右子节点变成新的左子节点
// 上面的步骤逐层进行。题目数据保证每个右节点都有一个同级节点（即共享同一父节点的左节点）且不存在子节点。

import { changeArrToTreeNode } from './index.js';

const root = [1, 2, 3, 4, 5];
const rootTree = changeArrToTreeNode(root);
const upsideDownBinaryTree = function (root) {
  let father = null,
    rightOfFather = null;
  while (root != null) {
    // 为了继续遍历，先记录下原来的左子节点防止丢失
    const left = root.left;
    // 当前节点的左子节点更新为父节点的右子节点
    root.left = rightOfFather;
    //记录下当前节点的右子节点
    rightOfFather = root.right;
    // 当前节点的右子节点更新为原父节点
    root.right = father;
    // 记录下当前节点作为下一个待遍历节点的父节点（新右子节点）
    father = root;
    root = left;
  }
  // 最终root=null,father指向的是最终的根节点
  return father;
};

console.log('upsideDownBinaryTree(rootTree) =>', upsideDownBinaryTree(rootTree));
