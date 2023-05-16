// https://leetcode.cn/problems/memoize-ii/
// 难度: 困难
//
// 现给定一个函数 fn ，返回该函数的一个 记忆化 版本。
// 一个 记忆化 的函数是一个函数，它不会被相同的输入调用两次。而是会返回一个缓存的值。
// 函数 fn 可以是任何函数，对它所接受的值类型没有任何限制。如果两个输入值在 JavaScript 中使用 === 运算符比较时相等，则它们被视为相同。
// 示例 1：
//   输入：
// getInputs = () => [[2,2],[2,2],[1,2]]
// fn = function (a, b) { return a + b; }
//   输出：[{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
//   解释：
// const inputs = getInputs();
// const memoized = memoize(fn);
// for (const arr of inputs) {
//   memoized(...arr);
// }
// 对于参数为 (2, 2) 的  输入: 2 + 2 = 4，需要调用 fn() 。
// 对于参数为 (2, 2) 的  输入: 2 + 2 = 4，这些  输入之前已经出现过，因此不需要再次调用 fn()。
// 对于参数为 (1, 2) 的  输入: 1 + 2 = 3，需要再次调用 fn()，总共调用了 2 次。
// 示例 2：
//   输入：
// getInputs = () => [[{},{}],[{},{}],[{},{}]]
// fn = function (a, b) { return a + b; }
//   输出：[{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]
//   解释：
// 将两个空对象合并总是会得到一个空对象。尽管看起来应该缓存命中并只调用一次 fn()，但是这些空对象彼此之间都不是 === 相等的。
// 示例 3：
//   输入：
// getInputs = () => { const o = {}; return [[o,o],[o,o],[o,o]]; }
// fn = function (a, b) { return ({...a, ...b}); }
//   输出：[{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]
//   解释：
// 将两个空对象合并总是会得到一个空对象。因为传入的每个对象都是相同的，所以第二个和第三个函数调用都会命中缓存。
// 提示：
//   1 <= inputs.length <= 10^5
//   0 <= inputs.flat().length <= 10^5
//   inputs[i][j] != NaN
// 标签:
//
let callCount = 0;

/**
 * @param {Function} fn
 */
function memoize(fn) {
  let memoNode = generateMemoNode();
  const DEFAULT = {};
  function generateMemoNode() {
    return {
      value: DEFAULT,
      map: new Map(),
    };
  }

  return function (...args) {
    let currentMemoNode = memoNode;
    for (const arg of args) {
      if (currentMemoNode.map.has(arg)) {
        currentMemoNode = currentMemoNode.map.get(arg);
      } else {
        const newMemoNode = generateMemoNode();
        currentMemoNode.map.set(arg, newMemoNode);
        currentMemoNode = newMemoNode;
      }
    }
    if (currentMemoNode.value !== DEFAULT) return currentMemoNode.value;
    callCount++;
    currentMemoNode.value = fn(...args);
    return currentMemoNode.value;
  };
}

function memoize2(fn) {
  const IdMap = new Map();
  const map = new Map();
  const getId = (IdMap, arg) => {
    if (IdMap.has(arg)) return IdMap.get(arg);
    IdMap.set(arg, map.size);
    return IdMap.get(arg);
  };

  return function (...args) {
    let key = args.map((i) => getId(IdMap, i)).join('@');
    if (map.has(key)) return map.get(key);
    let val = fn(...args);
    map.set(key, val);
    return val;
  };
}

const testcases = [
  [
    () => [
      [2, 2],
      [2, 2],
      [1, 2],
    ],
    function (a, b) {
      return a + b;
    },
    //   [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
  ],
  [
    () => [
      [{}, {}],
      [{}, {}],
      [{}, {}],
    ],
    function (a, b) {
      return { ...a, ...b };
    },
    // [{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]
  ],
  [
    () => {
      const o = {};
      return [
        [o, o],
        [o, o],
        [o, o],
      ];
    },
    function (a, b) {
      return { ...a, ...b };
    },
    // [{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]
  ],
];

testcases.forEach(([getInputs, fn]) => {
  callCount = 0;
  const inputs = getInputs();
  const memoized = memoize(fn);
  for (const arr of inputs) {
    console.log(`val =>`, memoized(...arr));
    console.log(`calls =>`, callCount);
  }
});
