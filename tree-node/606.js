import { changeArrToTreeNode } from './index.js';

const root = [1, 2, 3, 4];
const rootTree = changeArrToTreeNode(root);

const tree2str = function (root) {
  if (!root) return '';
  return `${root.val}${root.left ? `(${tree2str(root.left)})` : !root.right ? '' : '()'}${
    root.right ? `(${tree2str(root.right)})` : ''
  }`;
};

console.log(tree2str(rootTree));
