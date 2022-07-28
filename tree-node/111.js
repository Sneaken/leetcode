import { changeArrToTreeNode, isLeafNode } from './index.js';

const root = [2, null, 3, null, 4, null, 5, null, 6];
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
const minDepth = function (root) {
  let dep = 0;
  if (!root) return dep;
  const path = [root];
  while (path.length) {
    const len = path.length;
    dep++;
    for (let i = 0; i < len; i++) {
      const cur = path.pop();
      if (isLeafNode(cur)) {
        return dep;
      }
      cur.left && path.unshift(cur.left);
      cur.right && path.unshift(cur.right);
    }
  }
};

console.log(minDepth(rootTree));

const minDepth2 = function (root) {
  if (!root) return 0;
  if (isLeafNode(root)) return 1;
  let dep = Infinity;
  if (root.left) {
    dep = Math.min(minDepth2(root.left), dep);
  }
  if (root.right) {
    dep = Math.min(minDepth2(root.right), dep);
  }
  return dep + 1;
};
console.log(minDepth2(rootTree));
