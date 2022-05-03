import { changeArrToTreeNode } from "./index.js";

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
const rootTree = changeArrToTreeNode(root);

const targetSum = 22;

function hasPathSum(root, targetSum) {
  let found = false;
  const dfs = (root, sum = 0) => {
    if (!root) return;
    sum += root.val;
    if (!root.left && !root.right && sum === targetSum) {
      found = true;
    }
    dfs(root.left, sum);
    dfs(root.right, sum);
    sum -= root.val;
  };
  dfs(root);
  return found;
}

console.log(hasPathSum(rootTree, targetSum));
