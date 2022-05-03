import { TreeNode } from "./index.js";

const inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const build = (inorder, iStart, iEnd, postorder, pStart, pEnd) => {
    if (iStart > iEnd || pStart > pEnd) return null;
    // 后序遍历中的最后一个节点就是根节点
    const rootValue = postorder[pEnd];
    // 在中序遍历中定位根节点
    const iIndex = map.get(rootValue);
    // 先把根节点建立出来
    const root = new TreeNode(rootValue);
    // 得到左子树中的节点数目
    const leftTreeSize = iIndex - iStart;
    // 递归地构造左子树，并连接到根节点
    // 中序遍历中「从 左边界 开始到 根节点定位-1」个元素就对应了后序遍历中「从 左边界 开始的 leftTreeSize」个元素
    root.left = build(
      inorder,
      iStart,
      iIndex - 1,
      postorder,
      pStart,
      pStart + leftTreeSize - 1
    );
    // 递归地构造右子树，并连接到根节点
    // 后序遍历中「从 根节点定位+1 到 右边界」的元素就对应了中序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素
    root.right = build(
      inorder,
      iIndex + 1,
      iEnd,
      postorder,
      pStart + leftTreeSize,
      pEnd - 1
    );
    return root;
  };
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};

console.log(buildTree(inorder, postorder));
