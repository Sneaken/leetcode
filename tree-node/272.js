import { changeArrToTreeNode } from './index.js';

const root = [3, 2, 4, 1];
const rootTree = changeArrToTreeNode(root);
const target = 2.0;
const k = 3;
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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
const closestKValues = function (root, target, k) {
  const ans = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    ans.push({
      abs: Math.abs(root.val - target),
      val: root.val,
    });
    dfs(root.right);
  };
  dfs(root);

  ans.sort((a, b) => a.abs - b.abs);
  return ans.slice(0, k).map((i) => i.val);
};

closestKValues(rootTree, target, k);
