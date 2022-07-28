import { changeArrToTreeNode } from './index.js';

const root = [8, 6, 10, 5, 7, 9, 11],
  k = 12;
const rootTree = changeArrToTreeNode(root);
let findTarget = function (root, k) {
  const map = new Map();
  let flag = false;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    if (root.val > k) return false;
    if (map.has(k - root.val)) {
      flag = true;
      return;
    }
    map.set(root.val, root.val);
    dfs(root.right);
  };
  dfs(root);
  return flag;
};

console.log(findTarget(rootTree, k));

const findTarget2 = function (root, k) {
  const set = new Set();
  const helper = (root, k) => {
    if (!root) {
      return false;
    }
    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return helper(root.left, k) || helper(root.right, k);
  };
  return helper(root, k);
};
