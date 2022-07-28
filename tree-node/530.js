import { changeArrToTreeNode } from './index.js';

const root = [0, null, 2236, 1277, 2776, 519];
const rootTree = changeArrToTreeNode(root);

const getMinimumDifference = function (root) {
  let min = Infinity,
    pre;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    if (pre !== undefined) {
      min = Math.min(min, node.val - pre);
    }
    pre = node.val;
    dfs(node.right);
  };
  dfs(root);
  return min;
};

console.log('getMinimumDifference(rootTree) =>', getMinimumDifference(rootTree));
