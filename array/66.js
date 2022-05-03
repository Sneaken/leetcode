// 66. 加一
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
//

const digits = [9]
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let lastIdx = digits.length - 1

  digits[lastIdx] += 1
  while (lastIdx >= 0 && digits[lastIdx] >= 10) {
    digits[lastIdx] -= 10
    lastIdx -= 1
    if (lastIdx >= 0) {
      digits[lastIdx] += 1
    } else {
      digits.unshift(1)
    }
  }

  return digits
}

console.log('plusOne(digits) =>', plusOne(digits))