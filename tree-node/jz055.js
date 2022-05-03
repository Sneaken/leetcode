/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function (root) {
  this.cur = 0;
  this.list = [];
  this.bfs(root, this.list);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.list[this.cur++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.cur < this.list.length;
};

BSTIterator.prototype.bfs = function (root, list) {
  if (!root) return;
  this.bfs(root.left, list);
  list.push(root.val);
  this.bfs(root.right, list);
};
