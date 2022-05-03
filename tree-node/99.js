import { changeArrToTreeNode } from "./index.js";

const root = [3, 1, null, null, 2, null];
const rootTree = changeArrToTreeNode(root);

const dfs = (root, nums) => {
  if (root === null) {
    return;
  }
  dfs(root.left, nums);
  nums.push(root.val);
  dfs(root.right, nums);
};

const findTwoSwapped = (nums) => {
  const n = nums.length;
  let index1 = -1,
    index2 = -1;
  for (let i = 0; i < n - 1; ++i) {
    if (nums[i + 1] < nums[i]) {
      index2 = i + 1;
      if (index1 === -1) {
        index1 = i;
      } else {
        break;
      }
    }
  }
  let x = nums[index1],
    y = nums[index2];
  return [x, y];
};

const recover = (r, count, x, y) => {
  if (r !== null) {
    if (r.val === x || r.val === y) {
      r.val = r.val === x ? y : x;
      if (--count === 0) {
        return;
      }
    }
    recover(r.left, count, x, y);
    recover(r.right, count, x, y);
  }
};

const recoverTree = function (root) {
  const nums = [];
  dfs(root, nums);
  const [first, second] = findTwoSwapped(nums);
  recover(root, 2, first, second);
};
