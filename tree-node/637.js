import { changeArrToTreeNode } from './index.js';

const root = [3, 9, 20, null, null, 15, 7];
const rootTree = changeArrToTreeNode(root);
const averageOfLevels = function (root) {
  if (!root) return;
  const queue = [root];
  const res = [];
  while (queue.length) {
    const len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(sum / len);
  }
  return res;
};

console.log(averageOfLevels(rootTree));
