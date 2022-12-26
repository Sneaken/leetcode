// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// 给你一个链表，删除链表的倒数第n个结点，并且返回链表的头结点。
// 示例 1：
// <img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;" />
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：
// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：
// 输入：head = [1,2], n = 1
// 输出：[1]
// 提示：
// 链表中结点的数目为 sz
// 1 = sz = 30
// 0 = Node.val = 100
// 1 = n = sz
// 进阶：你能尝试使用一趟扫描实现吗？

// 标签: 链表,双指针
import { changeArrToListNode, ListNode } from '../list-node/index.js';

const testcases = [
  { head: changeArrToListNode([1, 2, 3, 4, 5]), n: 2 },
  { head: changeArrToListNode([1]), n: 1 },
  { head: changeArrToListNode([1, 2]), n: 1 },
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const list = [];
  let idx = 0;
  let cur = head;
  while (cur) {
    list[idx] = cur;
    cur = cur.next;
    idx++;
  }
  const pre = list[idx - n - 1];
  const next = list[idx - n + 1];
  if (!pre) return next || null;
  if (next) {
    pre.next = next;
  } else {
    pre.next = null;
  }
  return head || null;
};

testcases.map(({ head, n }) => {
  console.log('removeNthFromEnd(head,n) =>', removeNthFromEnd(head, n));
});

var removeNthFromEnd2 = function (head, n) {
  function getLength(head) {
    let length = 0;
    while (head) {
      head = head.next;
      length++;
    }
    return length;
  }

  const dummy = new ListNode(0, head);
  const length = getLength(head);
  let cur = dummy;
  for (let i = 0; i < length - n; ++i) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  return dummy.next;

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solutions/450350/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-b-61/
};

testcases.map(({ head, n }) => {
  console.log('removeNthFromEnd2(head,n) =>', removeNthFromEnd2(head, n));
});

// 双指针
function removeNthFromEnd3(head, n) {
  const dummy = new ListNode(0, head);
  let first = head;
  let second = dummy;
  for (let i = 0; i < n; ++i) {
    first = first.next;
  }
  while (first != null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solutions/450350/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-b-61/
}
