import { changeArrToTreeNode } from "./index.js";

const root = [1, null, 2, null, 3, 11, null, null, 4, 5, 6, 7, 8, 9, 10];

const rootTree = changeArrToTreeNode(root);

function inorderTraversal(root) {
  const getValue = (root, values = []) => {
    if (!root) return values;
    getValue(root.left, values);
    values.push(root.val);
    getValue(root.right, values);
    return values;
  };
  return getValue(root);
}

// 其他解答 方法三：Morris 中序遍历
