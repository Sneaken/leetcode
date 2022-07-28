import { changeArrToTreeNode } from './index.js';

// 230. 二叉搜索树中第K小的元素
const root = [3, 1, 4, null, 2],
  k = 2;
const rootTree = changeArrToTreeNode(root);
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const res = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  return res[k - 1];
};

console.log(kthSmallest(rootTree, k));

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest2 = function (root, k) {
  const stack = [];
  while (root != null || stack.length) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    --k;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root?.val;
};
