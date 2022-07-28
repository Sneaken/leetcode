import { changeArrToTreeNode } from './index.js';

const root = [1, 2, 3, 4, 5, 6];

const rootTree = changeArrToTreeNode(root);

function sumOfLeftLeaves(root) {
  if (!root || (!root.left && !root.right)) return 0;
  return getLeftLeaves(root).reduce((prev, cur) => {
    prev += cur.val;
    return prev;
  }, 0);
}

const getLeftLeaves = (root) => {
  const result = [];
  if (!root) return null;
  if (!root.left && !root.right) {
    result.push(root);
    // 叶子节点
    return result;
  }
  const left = getLeftLeaves(root.left);
  if (left) {
    result.push(...left);
  }
  const right = getLeftLeaves(root.right);
  if (right && right[0] !== root.right) {
    result.push(...right);
  }
  return result;
};
console.log(sumOfLeftLeaves(rootTree));

// 官方题解
// 深度优先
function sumOfLeftLeaves2(root) {
  return root != null ? dfs(root) : 0;
}

function dfs(node) {
  let ans = 0;
  if (node.left != null) {
    ans += isLeafNode(node.left) ? node.left.val : dfs(node.left);
  }
  if (node.right != null && !isLeafNode(node.right)) {
    ans += dfs(node.right);
  }
  return ans;
}

function isLeafNode(node) {
  return node.left == null && node.right == null;
}

// 广度优先
function sumOfLeftLeaves3(root) {
  if (root == null) return 0;
  const queue = [];
  queue.push(root);
  let ans = 0;
  while (queue.length !== 0) {
    let node = queue.shift();
    if (node.left != null) {
      if (isLeafNode(node.left)) {
        ans += node.left.val;
      } else {
        queue.push(node.left);
      }
    }
    if (node.right != null) {
      if (!isLeafNode(node.right)) {
        queue.push(node.right);
      }
    }
  }
  return ans;
}

console.log('sumOfLeftLeaves =>', sumOfLeftLeaves3(rootTree));
