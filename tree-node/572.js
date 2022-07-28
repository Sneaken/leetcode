import { changeArrToTreeNode } from './index.js';

const root = [3, 4, 5, 1, 2];
const rootTree = changeArrToTreeNode(root);
const subRoot = [4, 1, 2];
const subRootTree = changeArrToTreeNode(subRoot);

function isSubtree(root, subRoot) {
  const dfs = (root, path = []) => {
    if (!root) return path.join('-');
    path.push(root.val);
    if (root.left) {
      dfs(root.left, path);
    } else {
      path.push('ln');
    }
    if (root.right) {
      dfs(root.right, path);
    } else {
      path.push('rn');
    }
    return path.join('-');
  };

  const subRootPath = `-${dfs(subRoot)}-`;
  const rootPath = `-${dfs(root)}-`;
  return rootPath.includes(subRootPath);
}

isSubtree(rootTree, subRootTree);

// 官方题解: 让两个指针一开始先指向该节点和 tt 的根，然后「同步移动」两根指针来「同步遍历」这两棵树，判断对应位置是否相等。
function isSubtree2(s, t) {
  function check(s, t) {
    if (s == null && t == null) {
      return true;
    }
    if (s == null || t == null || s.val !== t.val) {
      return false;
    }
    return check(s.left, t.left) && check(s.right, t.right);
  }

  function dfs(s, t) {
    if (s === null) {
      return false;
    }
    return check(s, t) || dfs(s.left, t) || dfs(s.right, t);
  }

  return dfs(s, t);
}
