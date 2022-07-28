import { changeArrToTreeNode } from './index.js';

const root = [1, 3, 2, 1, null, 2];
const rootTree = changeArrToTreeNode(root);
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const numColor = function (root) {
  const map = {};
  const dfs = (root) => {
    if (!root) return;
    map[root.val] = 1;
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return Object.keys(map).length;
};
console.log(numColor(rootTree));

// 最快的
const numColor2 = function (root) {
  const set = new Set();
  function dfs(node) {
    if (!node) return;
    set.add(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return set.size;
};
