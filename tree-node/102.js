import { changeArrToTreeNode } from "./index.js";

const root = [3, 9, 20, null, null, 15, 7];
const rootTree = changeArrToTreeNode(root);

function levelOrder(root) {
  const result = [];
  if (!root) return result;
  const list = [root];

  while (list.length !== 0) {
    const len = list.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const cur = list.pop();
      level.push(cur.val);
      if (cur.left !== null) {
        list.unshift(cur.left);
      }
      if (cur.right !== null) {
        list.unshift(cur.right);
      }
    }
    result.push(level);
  }

  return result;
}

console.log(levelOrder(rootTree));
