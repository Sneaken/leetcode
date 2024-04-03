// 多叉树如何转成二叉树 ？
// 针对其中一个节点 将子节点作为 左儿子， 将兄弟节点作为右儿子，如此往复。

// 前序遍历 首先访问根结点然后遍历左子树，最后遍历右子树。
// 前序位置的代码在刚刚进入一个二叉树节点的时候执行
// 中序遍历 在二叉树中，中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树。
// 中序位置的代码在一个二叉树节点左子树都遍历完，即将开始遍历右子树的时候执行。
// 后序遍历 在二叉树中，先左后右再根，即首先遍历左子树，然后遍历右子树，最后访问根结点。
// 后序位置的代码在将要离开一个二叉树节点的时候执行
// 一旦发现题目和子树有关，那大概率要给函数设置合理的定义和返回值，在后序位置写代码了。

// 中序遍历 迭代版本
// function inorderTraversal(root) {
//   const res = [];
//   const stack = [];
//   let cur = root;
//   while (cur || stack.length) {
//     while (cur) {
//       stack.push(cur);
//       cur = cur.left;
//     }
//     cur = stack.pop();
//     res.push(cur.val);
//     cur = cur.right;
//   }
//   return res;
// }

// 遍历路径
// function dfs(root) {
//   const paths = [];
//   const construct_paths = (root, path = []) => {
//     if (!root) return;
//     path.push(root.val);
//     if (isLeafNode(root)) {
//       // 当前节点是叶子节点
//       paths.push([...path]); // 把路径加入到答案中
//     } else {
//       // 当前节点不是叶子节点，继续递归遍历
//       construct_paths(root.left, path);
//       construct_paths(root.right, path);
//     }
//   };
//   construct_paths(root);
//   return paths;
// }

// 树的遍历
// 深度优先 递归
// 广度优先 迭代

// 深度优先
// function dfs(node) {
//   // 访问 node // 前
//   dfs(node.left);
//   // 访问 node // 中
//   dfs(node.right);
//   // 访问 node // 后
// }

// 广度优先
// function bfs(node) {
//   if (!node) return;
//   const queue = [node];
//   while (queue.length) {
//     const size = queue.length;
//     const level = [];
//     for (let i = 0; i < size; i++) {
//       const cur = queue.shift();
//       level.push(cur.val);
//       if (cur.left !== null) {
//         queue.push(cur.left);
//       }
//       if (cur.right !== null) {
//         queue.push(cur.right);
//       }
//     }
//   }
// }

// 去重复 用 Set

// 镜像 用 两个队列

// 二叉搜索树的中序遍历是升序
// 二叉搜索树的特性： 左子树永远比右子树小

// 校验是否是二叉搜索树
// const isValidBST = (root) => {
//   const isValid = (root, min, max) => {
//     if (!root) return true;
//     if (min !== null && root.val <= min.val) return false;
//     if (max !== null && root.val >= max.val) return false;
//     return isValid(root.left, min, root) && isValid(root.right, root, max);
//   };
//   return isValid(root, null, null);
// };

// 平衡二叉搜索树具有如下性质：
// 平衡二叉搜索树中每个结点的左子树和右子树的高度最多相差 1
// 平衡二叉搜索树的子树也是平衡二叉搜索树
// 一棵存有 n 个结点的平衡二叉搜索树的高度是 O(log n)

// 二叉树
export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 *     1
 *    2 3
 *  4 5 6 7
 */

// [1,null,2, null, 3,11,null,null,4,5,6,7,8,9,10]

// jz048 序列化以及反序列化二叉树 可以参考
export function changeArrToTreeNode(arr) {
  if (arr.length === 0) return null;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] || arr[i] === 0) {
      temp[i] = new TreeNode(arr[i]);
    } else {
      temp[i] = null;
    }
    if (temp[i] === null) {
      // 补全
      if (arr[i * 2 + 1] !== undefined) {
        arr.splice(i * 2 + 1, 0, null, null);
      }
    }
  }
  for (let i = 0; i <= ((temp.length / 2) | 0) - 1; i++) {
    if (temp[2 * i + 1] != null) {
      // 左结点
      temp[i].left = temp[2 * i + 1];
    }
    if (temp[2 * i + 2] != null) {
      // 右结点
      temp[i].right = temp[2 * i + 2];
    }
  }
  temp = temp.filter((item) => item !== null);
  return temp[0];
}

export const isLeafNode = (node) => node && !node.left && !node.right;
