// 401. 二进制手表

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = function (turnedOn) {
  const ans = []
  for (let h = 0; h < 12; ++h) {
    for (let m = 0; m < 60; ++m) {
      if (h.toString(2).split('0').join('').length + m.toString(2).split('0').join('').length === turnedOn) {
        ans.push(`${h}:${m < 10 ? `0${m}` : m}`)
      }
    }
  }
  return ans
}

// 二进制枚举
// 另一种枚举方法是枚举所有 2^{10}=1024种灯的开闭组合，即用一个二进制数表示灯的开闭，其高 4 位为小时，低 6 位为分钟。
// 若小时和分钟的值均在合法范围内，且二进制中 1 的个数为 turnedOn，则将其加入到答案中。

const readBinaryWatch2 = function (turnedOn) {
  const ans = []
  for (let i = 0; i < 1024; ++i) {
    let h = i >> 6, m = i & 63 // 用位运算取出高 4 位和低 6 位
    if (h < 12 && m < 60 && i.toString(2).split('0').join('').length === turnedOn) {
      ans.push(h + ":" + (m < 10 ? "0" : "") + m)
    }
  }
  return ans
}