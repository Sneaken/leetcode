// https://leetcode.cn/problems/number-of-atoms/
// 难度: 困难
//
// 给你一个字符串化学式 formula ，返回 每种原子的数量 。
// 原子总是以一个大写字母开始，接着跟随 0 个或任意个小写字母，表示原子的名字。
// 如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 则不会跟数字。
// 例如，"H2O" 和 "H2O2" 是可行的，但 "H1O2" 这个表达是不可行的。
// 两个化学式连在一起可以构成新的化学式。
// 例如 "H2O2He3Mg4" 也是化学式。
// 由括号括起的化学式并佐以数字（可选择性添加）也是化学式。
// 例如 "(H2O2)" 和 "(H2O2)3" 是化学式。
//
// 返回所有原子的数量，格式为：第一个（按字典序）原子的名字，跟着它的数量（如果数量大于 1），然后是第二个原子的名字（按字典序），跟着它的数量（如果数量大于 1），以此类推。
//
// 示例 1：
//   输入：formula = "H2O"
//   输出："H2O"
//   解释：原子的数量是 {'H': 2, 'O': 1}。
// 示例 2：
//   输入：formula = "Mg(OH)2"
//   输出："H2MgO2"
//   解释：原子的数量是 {'H': 2, 'Mg': 1, 'O': 2}。
// 示例 3：
//   输入：formula = "K4(ON(SO3)2)2"
//   输出："K4N2O14S4"
//   解释：原子的数量是 {'K': 4, 'N': 2, 'O': 14, 'S': 4}。
// 提示：
//   1 <= formula.length<= 1000
//   formula 由英文字母、数字、'(' 和 ')' 组成
//   formula 总是有效的化学式
// 标签:
//   栈, 哈希表, 字符串, 排序

const testcases = [
  { formula: 'H2O' },
  { formula: 'Mg(OH)2' },
  { formula: 'K4(ON(SO3)2)2' },
  { formula: 'H11He49NO35B7N46Li20' },
  {
    formula:
      '(((U42Se42Fe10Mc31Rh49Pu49Sb49)49V39Tm50Zr44Og6)33((W2Ga48Tm14Eu46Mt12)23(RuRnMn11)7(Yb15Lu34Ra19CuTb2)47(Md38BhCu48Db15Hf12Ir40)7CdNi21(Db40Zr24Tc27SrBk46Es41DsI37Np9Lu16)46(Zn49Ho19RhClF9Tb30SiCuYb16)15)37(Cr48(Ni31)25(La8Ti17Rn6Ce35)36(Sg42Ts32Ca)37Tl6Nb47Rh32NdGa18Cm10Pt49(Ar37RuSb30Cm32Rf28B39Re7F36In19Zn50)46)38(Rh19Md23No22PoTl35Pd35Hg)41)50',
  },
];
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let i = 0;
  const n = formula.length;
  const parseAtom = () => {
    const sb = [];
    sb.push(formula[i++]); // 扫描首字母
    while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
      sb.push(formula[i++]); // 扫描首字母后的小写字母
    }
    return sb.join('');
  };

  const parseNum = () => {
    if (i === n || isNaN(Number(formula[i]))) return 1; // 不是数字，视作 1
    let num = '';
    while (i < n && !isNaN(Number(formula[i]))) {
      num += formula[i++];
    }
    num ||= '1';
    return Number(num);
  };

  const stack = [new Map()];
  while (i < n) {
    const ch = formula[i];
    if (ch === '(') {
      i++;
      stack.unshift(new Map()); // 将一个空的哈希表压入栈中，准备统计括号内的原子数量
    } else if (ch === ')') {
      i++;
      const num = parseNum(); // 括号右侧数字
      const popMap = stack.shift(); // 弹出括号内的原子数量
      const topMap = stack[0];
      for (const [atom, v] of popMap.entries()) {
        topMap.set(atom, (topMap.get(atom) || 0) + v * num); // 将括号内的原子数量乘上 num，加到上一层的原子数量中
      }
    } else {
      const atom = parseAtom();
      const num = parseNum();
      const topMap = stack[0];
      topMap.set(atom, (topMap.get(atom) || 0) + num); // 统计原子数量
    }
  }

  let map = stack.pop();
  map = Array.from(map);
  map.sort();
  const sb = [];
  for (const [atom, count] of map) {
    sb.push(atom);
    if (count > 1) {
      sb.push(count);
    }
  }
  return sb.join('');
};
testcases.forEach(({ formula }) => {
  console.log('countOfAtoms(formula) =>', countOfAtoms(formula));
});
