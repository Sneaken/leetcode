import { changeArrToTreeNode } from "./index.js";

const root = [1, 0, 1, 0, 1, 0, 1];
const rootTree = changeArrToTreeNode(root);

const sumRootToLeaf = function (root) {
  const ans = [];
  const list = [];
  const dfs = (root) => {
    if (!root) return;
    list.push(root.val);
    if (!root.left && !root.right) {
      ans.push(list.join(""));
      list.pop();
      return;
    }
    dfs(root.left);
    dfs(root.right);
    list.pop();
  };

  dfs(root);

  return ans.reduce((total, cur) => {
    total += parseInt(cur, 2);
    return total;
  }, 0);
};

console.log(sumRootToLeaf(rootTree));

const sumRootToLeaf2 = function (root) {
  let sum = 0;
  const dfs = (root, path) => {
    if (root.left == null && root.right == null) sum += (path << 1) | root.val;
    if (root.left) dfs(root.left, (path << 1) | root.val);
    if (root.right) dfs(root.right, (path << 1) | root.val);
  };
  dfs(root, 0);
  return sum;
};
