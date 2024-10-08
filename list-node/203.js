// https://leetcode.cn/problems/remove-linked-list-elements/
// 难度: 简单
//
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg" style="width: 500px; height: 142px;" />
//   输入：head = [1,2,6,3,4,5,6], val = 6
//   输出：[1,2,3,4,5]
// 示例 2：
//   输入：head = [], val = 1
//   输出：[]
// 示例 3：
//   输入：head = [7,7,7,7], val = 7
//   输出：[]
// 提示：
//   列表中的节点数目在范围 [0, 10^4] 内
//   1 <= Node.val <= 50
//   0 <= val <= 50
// 标签:
//   递归, 链表

import { changeArrToListNode, ListNode } from './index.js';

const testcases = [
  { head: changeArrToListNode([1, 2, 6, 3, 4, 5, 6]), val: 6 },
  { head: changeArrToListNode([]), val: 1 },
  { head: changeArrToListNode([7, 7, 7, 7]), val: 7 },
];
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  if (!head) return head;
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let cur = dummyHead.next;
  let pre = dummyHead;
  while (cur) {
    if (cur.val === val) {
      // 删除
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }

  return dummyHead.next;
};

const removeElements2 = (head, val) => {
  if (head === null) return head;
  head.next = removeElements2(head.next, val);
  return head.val === val ? head.next : head;
};

testcases.forEach(({ head, val }) => {
  console.log('removeElements(head,val) =>', removeElements(head, val));
});
