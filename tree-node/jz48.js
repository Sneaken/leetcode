import { changeArrToTreeNode } from "./index.js";

const root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
const rootTree = changeArrToTreeNode(root);

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (p.left === q || p.right === q) return p;
  if (q.left === p || q.right === p) return q;
  let ans = root;
  while (true) {
    if (p.val < ans.val && q.val < ans.val) {
      ans = ans.left;
    } else if (p.val > ans.val && q.val > ans.val) {
      ans = ans.right;
    } else {
      return ans;
    }
  }
};

console.log(lowestCommonAncestor(rootTree, rootTree.left, rootTree.right));
