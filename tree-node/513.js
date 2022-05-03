import { changeArrToTreeNode } from "./index.js";

const root = [2, 1, 3];
const rootTree = changeArrToTreeNode(root);

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = function (root) {
  const queue = [root];
  let leftVal;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      i === 0 && (leftVal = node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return leftVal;
};
