import { changeArrToTreeNode } from './index.js';

const root = [1, 2, 3, 5, 6];

const rootTree = changeArrToTreeNode(root);

function binaryTreePaths(root) {
  const res = [];
  const path = [];
  const dfs = (root) => {
    if (!root) return null;
    path.push(root.val);
    if (isLeafNode(root)) {
      res.push([...path]);
      path.pop();
      return;
    }
    dfs(root.left);
    dfs(root.right);
    path.pop();
  };
  dfs(root);
  return res.map((r) => r.join('->'));
}

const isLeafNode = (node) => !node.left && !node.right;

console.log(binaryTreePaths(rootTree));

// 官方题解 dfs
function binaryTreePaths2(root) {
  const paths = [];
  const construct_paths = (root, path) => {
    if (!root) return;
    path += root.val.toString();
    if (isLeafNode(root)) {
      // 当前节点是叶子节点
      paths.push(path); // 把路径加入到答案中
    } else {
      path += '->'; // 当前节点不是叶子节点，继续递归遍历
      construct_paths(root.left, path);
      construct_paths(root.right, path);
    }
  };
  construct_paths(root, '');
  return paths;
}

// 官方题解 bfs
function binaryTreePaths3(root) {
  const paths = [];
  if (root === null) {
    return paths;
  }
  const node_queue = [root];
  const path_queue = [root.val.toString()];

  while (node_queue.length) {
    const node = node_queue.shift();
    const path = path_queue.shift();

    if (isLeafNode(node)) {
      paths.push(path);
    } else {
      if (node.left !== null) {
        node_queue.push(node.left);
        path_queue.push(path + '->' + node.left.val.toString());
      }

      if (node.right !== null) {
        node_queue.push(node.right);
        path_queue.push(path + '->' + node.right.val.toString());
      }
    }
  }
  return paths;
}
