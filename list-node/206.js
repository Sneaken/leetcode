// https://leetcode.cn/problems/reverse-linked-list/
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// <div class="original__bRMd">
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" style="width: 542px; height: 222px;" />
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：
// <img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" style="width: 182px; height: 222px;" />
// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：
// 输入：head = []
// 输出：[]
// 提示：
// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

import { changeArrToListNode } from './index.js';

const head = changeArrToListNode([1, 2, 3, 4, 5]);
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 68ms
 * 43MB
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  while (head) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
// console.log('reverseList(head) =>', reverseList(head));

/**
 * 不熟
 * 52ms
 * 43.3MB
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  if (!head || !head.next) return head;
  const tail = reverseList2(head.next);
  // 打开逆序方向
  head.next.next = head;
  // 断开顺序方向
  head.next = null;
  return tail;
};

console.log('reverseList(head) =>', reverseList2(head));
