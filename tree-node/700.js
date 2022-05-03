import { changeArrToTreeNode } from "./index.js";

const root = [4, 2, 7, 1, 3],
  val = 2;
const rootTree = changeArrToTreeNode(root);

const searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return searchBST(root.left, val) || searchBST(root.right, val);
};
console.log(searchBST(rootTree, val));

// 因为是二叉搜索树
const searchBST2 = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) return searchBST2(root.left, val);
  return searchBST2(root.right, val);
};
