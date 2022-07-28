import { changeArrToTreeNode } from './index.js';

const root = [96, 12, null, null, 13, null, 52, 29];

const rootTree = changeArrToTreeNode(root);
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function (root) {
  const list = [];
  let min = Infinity;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    if (list.length > 0) {
      const last = list[list.length - 1] || 0;
      min = Math.min(min, Math.abs(root.val - last));
    }
    list.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  console.log('list =>', list);

  return min;
};

console.log(minDiffInBST(rootTree));

const minDiffInBST2 = function (root) {
  let ans = Number.MAX_SAFE_INTEGER,
    pre = -1;
  const dfs = (root) => {
    if (root === null) {
      return;
    }
    dfs(root.left);
    if (pre == -1) {
      pre = root.val;
    } else {
      // 因为是二叉搜索树所以肯定比上一个数字大
      ans = Math.min(ans, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return ans;
};
