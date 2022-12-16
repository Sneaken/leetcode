const connect = function (root) {
  if (!root) return root;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      level.push(node);
      if (i !== 0) {
        level[i - 1].next = node;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return root;
};

const connect2 = function (root) {
  if (root === null) {
    return root;
  }

  // 初始化队列同时将第一层节点加入队列中，即根节点
  const Q = [root];

  // 外层的 while 循环迭代的是层数
  while (Q.length > 0) {
    // 记录当前队列大小
    const size = Q.length;

    // 遍历这一层的所有节点
    for (let i = 0; i < size; i++) {
      // 从队首取出元素
      const node = Q.shift();

      // 连接
      if (i < size - 1) {
        node.next = Q[0];
      }

      // 拓展下一层节点
      if (node.left !== null) {
        Q.push(node.left);
      }
      if (node.right !== null) {
        Q.push(node.right);
      }
    }
  }

  // 返回根节点
  return root;

  // 作者：LeetCode-Solution
  // 链接：https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/solution/tian-chong-mei-ge-jie-dian-de-xia-yi-ge-you-ce-2-4/
  //   来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};

const connect3 = function (root) {
  if (root === null) {
    return root;
  }

  // 从根节点开始
  let leftmost = root;

  while (leftmost.left !== null) {
    // 遍历这一层节点组织成的链表，为下一层的节点更新 next 指针
    let head = leftmost;

    while (head !== null) {
      // CONNECTION 1
      head.left.next = head.right;

      // CONNECTION 2
      if (head.next != null) {
        head.right.next = head.next.left;
      }

      // 指针向后移动
      head = head.next;
    }

    // 去下一层的最左的节点
    leftmost = leftmost.left;
  }

  return root;
  // 作者：LeetCode-Solution
  // 链接：https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/solution/tian-chong-mei-ge-jie-dian-de-xia-yi-ge-you-ce-2-4/
  //   来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};
