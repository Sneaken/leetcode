import { changeArrToListNode, ListNode } from './index.js';

const head = changeArrToListNode([1, 2]);
const x = 2;

function partition(head, x) {
  if (!head) return head;
  let dummyNode = new ListNode(-1);
  let smallTail = dummyNode;
  let bigTail;
  let cur = head;
  while (cur) {
    if (cur.val < x) {
      // 小数 的 下一个 就是 大数的开始
      const bigStart = smallTail.next;
      if (bigStart) {
        // 如果大数存在

        // 把下一轮的新节点存起来
        const newStart = cur.next;
        // 小数目指向 当前节点
        smallTail.next = cur;
        // 当前节点指向 大数的开始
        cur.next = bigStart;
        // 更新小数节点
        smallTail = cur;
        // 将当前节点替换为新起点
        cur = newStart;
      } else {
        // 全是小数的情况下
        // 小数目指向 当前节点
        const copyCur = new ListNode(cur.val);
        smallTail.next = copyCur;
        // 更新小数节点
        smallTail = copyCur;
        cur = cur.next;
      }
    } else {
      if (!smallTail.next) {
        smallTail.next = new ListNode(cur.val);
      } else {
        const copy = new ListNode(cur.val);
        bigTail.next = copy;
        bigTail = copy;
      }
      cur = cur.next;
    }
  }
  return dummyNode.next;
}

// console.log(JSON.stringify( partition(head, x)))
