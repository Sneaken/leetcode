import { changeArrToTreeNode } from './index.js';

const root = [5, 3, 6, 2, 4, null, 7],
  k = 28;
const rootTree = changeArrToTreeNode(root);

const findTarget = function (root, k) {
  const list = [];
  const dfs = (root) => {
    if (!root) return;
    list.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  for (let i = 0; i < list.length; i++) {
    const target = k - list[i];
    const find = list.findIndex((i) => i === target);
    if (find !== -1 && find !== i) return true;
  }

  return false;
};

console.log(findTarget(rootTree, k));

// 官方题解
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

const findTarget3 = function (root, k) {
  const set = new Set();
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    if (set.has(k - node.val)) {
      return true;
    }
    set.add(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return false;
};
