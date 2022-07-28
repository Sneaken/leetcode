import { changeArrToTreeNode } from './index.js';

const root = [1, 2, 3, 4, 5, null, 7];
const rootTree = changeArrToTreeNode(root);
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isCompleteTree = function (root) {
  const queue = [root];
  let end = false;
  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const cur = queue.shift();

      if (cur == null) {
        end = true;
      } else {
        if (end) {
          return false;
        }
        queue.push(cur.left);
        queue.push(cur.right);
      }
    }
  }
  return true;
};

console.log(isCompleteTree(rootTree));

// 计算二叉树每条路径之和
