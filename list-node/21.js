// https://leetcode.cn/problems/merge-two-sorted-lists/
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
// 示例 2：
// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：
// 输入：l1 = [], l2 = [0]
// 输出：[0]
// 提示：
// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列

// 标签: 递归,链表
import { changeArrToListNode, ListNode } from './index.js';

const testcases = [
  { list1: changeArrToListNode([1, 2, 4]), list2: changeArrToListNode([1, 3, 4]) },
  { list1: changeArrToListNode([]), list2: changeArrToListNode([]) },
  { list1: changeArrToListNode([]), list2: changeArrToListNode([0]) },
];
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val > list2.val) return mergeTwoLists(list2, list1);
  let cur = list1;
  while (list2) {
    const next = cur.next;
    if (next) {
      if (next.val >= list2.val) {
        cur.next = list2;
        list2 = list2.next;
        cur.next.next = next;
      }
      cur = cur.next;
    } else {
      cur.next = list2;
      list2 = null;
    }
  }
  return list1;
};
testcases.map(({ list1, list2 }) => {
  console.log('mergeTwoLists(list1,list2) =>', mergeTwoLists(list1, list2));
});

var mergeTwoLists2 = function (l1, l2) {
  const preHead = new ListNode(-1);

  let prev = preHead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return preHead.next;
  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/merge-two-sorted-lists/solutions/226408/he-bing-liang-ge-you-xu-lian-biao-by-leetcode-solu/
};
