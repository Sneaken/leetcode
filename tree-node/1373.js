import { changeArrToTreeNode } from "./index.js";

const root = [1, null, 10, -5, 20];
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
 * @return {number}
 */
const maxSumBST = function (root) {
  const isValidBST = (root) => {
    return isValid(root, null, null, 0);
  };

  const isValid = (root, min, max, sum) => {
    if (!root)
      return {
        valid: true,
        sum,
      };
    if (min !== null && root.val <= min.val) return { valid: false };
    if (max !== null && root.val >= max.val) return { valid: false };
    sum += root.val;
    const leftResult = isValid(root.left, min, root, sum);
    return leftResult.valid && isValid(root.right, root, max, leftResult.sum);
  };

  let max = 0;
  const dfs = (root) => {
    if (!root) return;
    const { valid, sum } = isValidBST(root);
    if (valid) {
      max = Math.max(max, sum);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);

  return max;
};

console.log("maxSumBST(rootTree) =>", maxSumBST(rootTree));
