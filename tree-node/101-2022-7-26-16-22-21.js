import { changeArrToTreeNode } from './index.js';

const root = [1, 2, 2, 3, 4, 4, 3, 1];
const rootTree = changeArrToTreeNode(root);

console.log('rootTree =>', rootTree);
const test = () => {
  const path = [];
  let maxDepth = 0;
  let depth = 0;
  const dfs = (root) => {
    if (!root) {
      console.log('depth =>', depth);
      maxDepth = Math.max(maxDepth, depth);
      return;
    }
    depth++;
    dfs(root.left);
    dfs(root.right);
    depth--;
  };
  dfs(rootTree);
  console.log('path =>', path);
};

test();

const isSymmetric = function (root) {
  if (!root) return false;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        level.push('None');
      }
    }
    if ([...level].reverse().toString() !== level.toString()) return false;
  }

  return true;
};

const isSymmetric2 = function (root) {
  const check = (u, v) => {
    const q = [];
    q.push(u), q.push(v);

    while (q.length) {
      u = q.shift();
      v = q.shift();

      if (!u && !v) continue;
      if (!u || !v || u.val !== v.val) return false;

      q.push(u.left);
      q.push(v.right);

      q.push(u.right);
      q.push(v.left);
    }
    return true;
  };
  return check(root, root);
};

const isSymmetric3 = function (root) {
  const check = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  };
  return check(root, root);
};
