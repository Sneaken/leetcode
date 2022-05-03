import { changeArrToTreeNode, TreeNode } from "./index.js";

const root = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
const rootTree = changeArrToTreeNode(root);

const increasingBST = function (root) {
  const list = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    list.push(root.val);
    dfs(root.right);
  };
  dfs(root);

  let rroot, node;
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      rroot = new TreeNode(list[i]);
      node = rroot;
    } else {
      node.right = new TreeNode(list[i]);
      node = node.right;
    }
  }

  return rroot;
};

increasingBST(rootTree);

const increasingBST2 = function (root) {
  const res = [];
  const inorder = (node, res) => {
    if (!node) {
      return;
    }
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
  };
  inorder(root, res);

  const dummyNode = new TreeNode(-1);
  let currNode = dummyNode;
  for (const value of res) {
    currNode.right = new TreeNode(value);
    currNode = currNode.right;
  }
  return dummyNode.right;
};

// 推荐
const increasingBST3 = function (root) {
  const dummyNode = new TreeNode(-1);
  let resNode = dummyNode;
  const inorder = (node) => {
    if (!node) {
      return;
    }
    inorder(node.left);

    // 在中序遍历的过程中修改节点指向
    resNode.right = node;
    node.left = null;
    resNode = node;

    inorder(node.right);
  };
  inorder(root);
  return dummyNode.right;
};
