import { changeArrToTreeNode } from "./index.js";

const root = [10, 5, 15, 3, 7, null, 18],
  low = 7,
  high = 15;
const rootTree = changeArrToTreeNode(root);

function rangeSumBST(root, low, high) {
  let sum = 0;
  const dfs = (root) => {
    if (!root) return;
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return sum;
}

console.log(rangeSumBST(rootTree, low, high));
