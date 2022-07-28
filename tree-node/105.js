import { TreeNode } from './index.js';

const preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const build = (preorder, pStart, pEnd, inorder, iStart, iEnd) => {
    if (pStart > pEnd || iStart > iEnd) return null;
    // 前序遍历中的第一个节点就是根节点
    const rootValue = preorder[pStart];
    // 在中序遍历中定位根节点
    const iIndex = map.get(rootValue);
    // 先把根节点建立出来
    const root = new TreeNode(rootValue);
    // 得到左子树中的节点数目
    const leftTreeSize = iIndex - iStart;
    // 递归地构造左子树，并连接到根节点
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = build(preorder, pStart + 1, pStart + leftTreeSize, inorder, iStart, iIndex - 1);
    // 递归地构造右子树，并连接到根节点
    // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
    root.right = build(preorder, pStart + leftTreeSize + 1, pEnd, inorder, iIndex + 1, iEnd);
    return root;
  };
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};
