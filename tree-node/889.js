import { TreeNode } from './index.js';

const preorder = [1, 2],
  postorder = [2, 1];
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const constructFromPrePost = function (preorder, postorder) {
  const map = new Map();
  for (let i = 0; i < postorder.length; i++) {
    map.set(postorder[i], i);
  }
  const build = (preorder, pStart, pEnd, postorder, poStart, poEnd) => {
    if (pStart > pEnd || poStart > poEnd) return null;
    const rootVal = preorder[pStart];
    const root = new TreeNode(rootVal);
    if (pStart === pEnd) return root;
    // 关键点
    let rootLeftVal = preorder[pStart + 1];
    let rootLeftValIndexOfPostorder = map.get(rootLeftVal);
    const leftTreeSize = rootLeftValIndexOfPostorder - poStart + 1;
    root.left = build(preorder, pStart + 1, pStart + leftTreeSize, postorder, poStart, rootLeftValIndexOfPostorder);
    root.right = build(
      preorder,
      pStart + leftTreeSize + 1,
      pEnd,
      postorder,
      rootLeftValIndexOfPostorder + 1,
      poEnd - 1
    );
    return root;
  };

  return build(preorder, 0, preorder.length - 1, postorder, 0, preorder.length - 1);
};

console.log(constructFromPrePost(preorder, postorder));
