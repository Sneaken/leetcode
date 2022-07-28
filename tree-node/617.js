import { changeArrToTreeNode } from './index.js';

const root1 = [1, 3, 2, 5],
  root2 = [2, 1, 3, null, 4, null, 7];
const root1Tree = changeArrToTreeNode(root1),
  root2Tree = changeArrToTreeNode(root2);

const mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
