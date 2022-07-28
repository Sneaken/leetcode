import { changeArrToTreeNode } from './index.js';

const root = [0, null, 1];
const rootTree = changeArrToTreeNode(root);

console.log('rootTree =>', rootTree);

function isValidBST(root) {
  return isValid(root, null, null);
}

const isValid = (root, min, max) => {
  if (!root) return true;
  if (min !== null && root.val <= min.val) return false;
  if (max !== null && root.val >= max.val) return false;
  return isValid(root.left, min, root) && isValid(root.right, root, max);
};

console.log(isValidBST(rootTree));
console.log(isValidBST2(rootTree));

// isValidBST2 待确认
function isValidBST2(root) {
  let flag = true;
  const path = [];
  const dfs = (root) => {
    if (!root) return;
    path.push(root.val);
    dfs(root.left);
    if (root.val < path.at(-1)) {
      flag = false;
    }
    dfs(root.right);
    path.pop();
  };
  dfs(root);
  return flag;
}

// 官方题解
function isValidBST3(root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
}
