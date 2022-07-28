import { TreeNode } from './index.js';

const nums = [3, 2, 1, 6, 0, 5];
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  const max = Math.max(...nums);
  const maxIndex = nums.findIndex((n) => n === max);
  const left = nums.slice(0, maxIndex);
  const right = nums.slice(maxIndex + 1);
  const root = new TreeNode(max);
  if (left.length > 0) {
    root.left = constructMaximumBinaryTree(left);
  }
  if (right.length > 0) {
    root.right = constructMaximumBinaryTree(right);
  }
  return root;
};

constructMaximumBinaryTree(nums);

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree2 = function (nums) {
  function traversal(nums, left, right) {
    if (right <= left) return null;
    else if (left - right === -1) return new TreeNode(nums[left]);
    let maxIndex;

    for (let i = left; i < right; i++) {
      if (maxIndex == null) maxIndex = i;
      else if (nums[i] > nums[maxIndex]) maxIndex = i;
    }

    const root = new TreeNode(nums[maxIndex]);

    const leftEnd = maxIndex;

    root.left = traversal(nums, left, leftEnd);
    root.right = traversal(nums, leftEnd + 1, right);
    return root;
  }

  return traversal(nums, 0, nums.length);
};
