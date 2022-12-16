// https://leetcode.cn/problems/merge-two-binary-trees/
// 给你两棵二叉树： root1 和 root2 。
// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
// 返回合并后的二叉树。
// 注意: 合并过程必须从两个树的根节点开始。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/merge.jpg" style="height: 163px; width: 600px;" />
// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]
// 示例 2：
// 输入：root1 = [1], root2 = [1,2]
// 输出：[2,2]
// 提示：
// 两棵树中的节点数目在范围 [0, 2000] 内
// -10^4 = Node.val = 10^4

import { changeArrToTreeNode, TreeNode } from './index.js';

const root1 = changeArrToTreeNode([1, 3, 2, 5]),
  root2 = changeArrToTreeNode([2, 1, 3, null, 4, null, 7]);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  const queue = [root1, root2];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i += 2) {
      const cur1 = queue.shift();
      const cur2 = queue.shift();
      if (cur1 && cur2) {
        cur1.val += cur2.val;
        if (!cur1.left) {
          cur1.left = cur2.left;
          cur2.left = null;
        }
        if (!cur1.right) {
          cur1.right = cur2.right;
          cur2.right = null;
        }
        queue.push(cur1.left, cur2.left);
        queue.push(cur1.right, cur2.right);
      } else if (cur1) {
        queue.push(cur1.left, null);
        queue.push(cur1.right, null);
      }
    }
  }

  return root1;
};

// 官方题解
var mergeTrees2 = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  const merged = new TreeNode(root1.val + root2.val);
  merged.left = mergeTrees(root1.left, root2.left);
  merged.right = mergeTrees(root1.right, root2.right);
  return merged;
};

console.log('mergeTrees(root1, root2) =>', mergeTrees(root1, root2));
