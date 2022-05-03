import { changeArrToTreeNode } from "./index.js";

const root = [3, 9, 20, null, null, 15, 7];
const rootTree = changeArrToTreeNode(root);

const maxDepth = function (root) {
  if (!root) return 0;
  const leftMax = maxDepth(root.left);
  const leftRight = maxDepth(root.right);
  return Math.max(leftMax, leftRight) + 1;
};

console.log(maxDepth(rootTree));
