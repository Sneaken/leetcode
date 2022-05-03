import { changeArrToListNode, ListNode } from "./index.js";

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

function getMenuPath(menus = [], value, path = []) {
  let result = [];
  const traverseMenus = (menus, path = []) => {
    menus.forEach((menu, index) => {
      const currentPath = [...path, index];
      if (menu.value === value) {
        result = currentPath;
      }
      menu.children && traverseMenus(menu.children, currentPath);
    });
  };
  traverseMenus(menus);
  return result;
}

const menus = [
  {
    title: "个人中心",
    children: [
      {
        title: "个人信息",
        value: "@entry:uno/info",
        admittance: [],
      },
      {
        title: "我的分组",
        value: "@entry:uno/groups",
        admittance: [],
      },
      {
        title: "待办事项",
        value: "@entry:uno/todo",
        admittance: [],
      },
    ],
    admittance: [],
  },
  {
    title: "安全教育培训与考试",
    children: [
      {
        title: "在线学习",
        value: "@entry:safe-exam/home",
        admittance: [],
      },
      {
        title: "在线练习",
        children: [
          {
            title: "按题库练习",
            value: "@entry:safe-exam/study-pool",
            admittance: [],
          },
          {
            title: "按知识点练习",
            value: "@entry:safe-exam/study-knowledge",
            admittance: [],
          },
        ],
        admittance: [],
      },
      {
        title: "我的收藏",
        children: [
          {
            title: "题目收藏",
            value: "@entry:safe-exam/collect-pool-item",
            admittance: [],
          },
          {
            title: "课件收藏",
            value: "@entry:safe-exam/collect-learn-material",
            admittance: [],
          },
          {
            title: "图片收藏",
            value: "@entry:safe-exam/collect-pictrue",
            admittance: [],
          },
          {
            title: "规章收藏",
            value: "@entry:safe-exam/collect-rule-regulation",
            admittance: [],
          },
        ],
        admittance: [],
      },
      {
        title: "在线考试",
        children: [
          {
            title: "待考",
            value: "@entry:safe-exam/my-exam-pending",
            admittance: [],
          },
          {
            title: "公开考试",
            value: "@entry:safe-exam/my-exam-public",
            admittance: [],
          },
        ],
        admittance: [],
      },
      {
        title: "我的成绩",
        value: "@entry:safe-exam/my-exam-finished",
        admittance: [],
      },
      {
        title: "模拟考试",
        value: "@entry:safe-exam/my-mock",
        admittance: [],
      },
    ],
    admittance: [],
  },
  {
    title: "危化品全流程管理",
    children: [
      {
        title: "我的购物车",
        value: "@entry:lab-orders/my-cart",
        admittance: [],
      },
      {
        title: "采购管理",
        children: [
          {
            title: "订单列表",
            value: "@entry:lab-orders/order-list",
            admittance: [],
          },
          {
            title: "付款管理",
            value: "@entry:lab-orders/payment-list",
            admittance: [],
          },
          {
            title: "竞价管理",
            value: "@entry:lab-orders/bid-list",
            admittance: [],
          },
          {
            title: "议价管理",
            value: "@entry:lab-orders/quote-list",
            admittance: [],
          },
          {
            title: "权限管理",
            value: "@entry:lab-orders/my-access",
            admittance: [],
          },
          {
            title: "付款夹",
            value: "@entry:lab-orders/my-bucket",
            admittance: [],
          },
        ],
        admittance: [],
      },
      {
        title: "存货管理",
        children: [
          {
            title: "库存列表",
            value: "@entry:lab-inventory/inventory-list",
            admittance: [],
          },
          {
            title: "存货位置管理",
            value: "@entry:lab-inventory/storage",
            admittance: [],
          },
        ],
        admittance: [],
      },
      {
        title: "经费管理",
        children: [
          {
            title: "自有经费",
            value: "@entry:lab-grants/my-grant",
            admittance: [],
          },
          {
            title: "授权经费",
            value: "@entry:lab-grants/my-accredit",
            admittance: [],
          },
        ],
        admittance: [],
      },
      {
        title: "危废处置",
        value: "@entry:lab-waste/waste-list",
        admittance: [],
      },
      {
        title: "废瓶回收",
        value: "@entry:lab-waste-bottle/waste-bottle-list",
        admittance: [],
      },
    ],
    admittance: [],
  },
];

console.log(getMenuPath(menus, "@entry:lab-orders/order-list"));
