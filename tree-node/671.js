import { changeArrToTreeNode } from "./index.js";

const root = [5, 8, 5];
const rootTree = changeArrToTreeNode(root);

const findSecondMinimumValue = function (root) {
  const set = new Set();
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    set.add(root.val);
    dfs(root.right);
  };
  dfs(root);
  return [...set].sort((a, b) => a - b)[1] || -1;
};

console.log(findSecondMinimumValue(rootTree));

// 官方题解
// 仔细思考一下会发现 根节点就是最小的数
const findSecondMinimumValue2 = function (root) {
  let ans = -1;
  const rootValue = root.val;

  const dfs = (node) => {
    if (node === null) {
      return;
    }
    if (ans !== -1 && node.val >= ans) {
      return;
    }
    if (node.val > rootValue) {
      ans = node.val;
    }
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return ans;
};
