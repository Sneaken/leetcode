import { TreeNode } from "./index.js";

const traversal = "1-401--349---90--88";
function recoverFromPreorder(traversal) {
  const path = [];
  let pos = 0;
  while (pos < traversal.length) {
    let level = 0;
    while (traversal[pos] === "-") {
      level++;
      pos++;
    }
    let val = 0;
    while (pos < traversal.length && traversal[pos] !== "-") {
      // 不一定是个位数字
      val = val * 10 + Number(traversal[pos]);
      pos++;
    }

    const node = new TreeNode(val);
    console.log("level =>", level);
    if (level === path.length) {
      if (path.length > 0) {
        path[path.length - 1].left = node;
      }
    } else {
      path.length = level;
      path[path.length - 1].right = node;
    }
    path.push(node);
  }
  return path[0];
}

console.log(recoverFromPreorder(traversal));

const recoverFromPreorder2 = function (s) {
  let i = 0,
    cur = 0;

  function dfs(dep) {
    while (s[i] === "-") cur++, i++;
    if (cur !== dep) return null;
    let val = 0;
    while (s[i] < 10) val = val * 10 + +s[i++];
    const node = new TreeNode(val);
    cur = 0;
    node.left = dfs(dep + 1);
    node.right = dfs(dep + 1);
    return node;
  }

  return dfs(0);
};
