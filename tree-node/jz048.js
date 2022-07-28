import { changeArrToTreeNode, TreeNode } from './index.js';

const root = [1, null, 2, null, 3, 11, null, null, 4, 5, 6, 7, 8, 9, 10];
const rootTree = changeArrToTreeNode(root);

console.log('rootTree =>', rootTree);

// console.log(deserialize(serialize(rootTree)));

const serialize2 = function (root) {
  const serialize = (root, str) => {
    if (root === null) {
      str += 'None,';
    } else {
      str += root.val + '' + ',';
      str = serialize(root.left, str);
      str = serialize(root.right, str);
    }
    return str;
  };
  return serialize(root, '');
};

const deserialize2 = function (data) {
  const dataArray = data.split(',');
  const deserialize = (dataList) => {
    if (dataList[0] === 'None') {
      dataList.shift();
      return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = deserialize(dataList);
    root.right = deserialize(dataList);

    return root;
  };

  return deserialize(dataArray);
};

console.log(serialize2(rootTree));

console.log(deserialize2(serialize2(rootTree)));
