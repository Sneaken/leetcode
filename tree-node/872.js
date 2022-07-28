import { changeArrToTreeNode } from './index.js';

const root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
const root1Tree = changeArrToTreeNode(root1);

const root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
const root2Tree = changeArrToTreeNode(root2);

function leafSimilar(root1, root2) {
  const dfs = (root, path = []) => {
    if (!root) return path;
    if (isLeafNode(root)) {
      path.push(root.val);
    }
    dfs(root.left, path);
    dfs(root.right, path);
    return path;
  };
  const r1 = `-${dfs(root1).join('-')}-`;
  const r2 = `-${dfs(root2).join('-')}-`;
  return r1 === r2;
}

const isLeafNode = (root) => !root.left && !root.right;

leafSimilar(root1Tree, root2Tree);
