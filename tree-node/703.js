/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = [...new Set(nums)];
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (!this.nums.includes(val)) {
    this.nums.push(val);
  }
  this.nums.sort((a, b) => b - a);
  console.log("this.nums =>", this.nums);
  return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const a = new KthLargest(3, [4, 5, 8, 2]);
console.log(a.add(3));
console.log(a.add(5));
console.log(a.add(10));
console.log(a.add(9));
console.log(a.add(4));
