import { changeArrToTreeNode } from "./index.js";

const root = [1];
const rootTree = changeArrToTreeNode(root);

const getValues = (root, result = []) => {
  if (!root) return result;
  result.push(root.val);
  getValues(root.left, result);
  getValues(root.right, result);
  return result;
};

function preorderTraversal(root) {
  return getValues(root);
}

// 方法三：Morris 遍历
// 思路与算法
//
// 有一种巧妙的方法可以在线性时间内，只占用常数空间来实现前序遍历。这种方法由 J. H. Morris 在 1979 年的论文「Traversing Binary Trees Simply and Cheaply」中首次提出，因此被称为 Morris 遍历。
//
// Morris 遍历的核心思想是利用树的大量空闲指针，实现空间开销的极限缩减。其前序遍历规则总结如下：
//
// 新建临时节点，令该节点为 root；
//
// 如果当前节点的左子节点为空，将当前节点加入答案，并遍历当前节点的右子节点；
//
// 如果当前节点的左子节点不为空，在当前节点的左子树中找到当前节点在中序遍历下的前驱节点：
//
// 如果前驱节点的右子节点为空，将前驱节点的右子节点设置为当前节点。然后将当前节点加入答案，并将前驱节点的右子节点更新为当前节点。当前节点更新为当前节点的左子节点。
//
// 如果前驱节点的右子节点为当前节点，将它的右子节点重新设为空。当前节点更新为当前节点的右子节点。
//
// 重复步骤 2 和步骤 3，直到遍历结束。
//
// 这样我们利用 Morris 遍历的方法，前序遍历该二叉树，即可实现线性时间与常数空间的遍历。
//
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/er-cha-shu-de-qian-xu-bian-li-by-leetcode-solution/
//   来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
