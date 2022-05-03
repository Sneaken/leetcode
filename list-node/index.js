// 单链表
export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function changeArrToListNode(arr) {
  if (arr.length === 0) return null;
  let cur = new ListNode(arr[0]);
  const dummyNode = new ListNode(-1, cur);
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return dummyNode.next;
}
