// // 对数组进行 dfs
//
// const list = []
// const dfs = (val = 0, idx = 0, nums, r = []) => {
//   if (idx === nums.length) {
//     r.push(val)
//     list.push(r.slice())
//     // 递归结束
//     return
//   }
//   dfs(val, idx + 1, nums, r)
//   dfs(val ^ nums[idx], idx + 1, nums, r)
// }
// dfs(0, 0, [1, 2, 3])
//
//
// console.log('list =>', list)
