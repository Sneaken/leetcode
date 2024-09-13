// https://leetcode.cn/problems/swap-nodes-in-pairs/
// 难度: 中等
//
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg" style="width: 422px; height: 222px;" />
//   输入：head = [1,2,3,4]
//   输出：[2,1,4,3]
// 示例 2：
//   输入：head = []
//   输出：[]
// 示例 3：
//   输入：head = [1]
//   输出：[1]
// 提示：
//   链表中节点的数目在范围 [0, 100] 内
//   0 <= Node.val <= 100
// 标签:
//   递归, 链表

import { changeArrToListNode, ListNode } from './index.js';

const testcases = [
  { head: changeArrToListNode([1, 2, 3, 4]) },
  { head: changeArrToListNode([]) },
  { head: changeArrToListNode([1]) },
  { head: changeArrToListNode([1, 2, 3]) },
];
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 75ms 9.5%
 * 51.7MB 57.5%
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (!head) return head;
  let dummyHead = new ListNode(0);
  let prev = dummyHead;
  let cur = head;
  while (cur) {
    const n2 = cur.next;

    if (n2) {
      prev.next = n2;
      prev = cur;
    } else {
      prev.next = cur;

      break;
    }

    const n3 = n2.next;
    n2.next = cur;
    cur.next = n3;
    cur = n3;
  }
  return dummyHead.next;
};

testcases.forEach(({ head }) => {
  console.log('swapPairs(head) =>', swapPairs(head));
});
