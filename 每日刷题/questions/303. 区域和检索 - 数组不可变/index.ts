/**
 * @leetcode https://leetcode.cn/problems/range-sum-query-immutable/
 * @description 利用前缀和
 */

 class NumArray {
  sums: number[]
  constructor(nums: number[]) {
    const leng = nums.length
    this.sums = new Array(leng + 1).fill(0)
    for (let i = 0; i < leng; i++) {
      this.sums[i + 1] = this.sums[i] + nums[i]
    }
  }

  sumRange(left: number, right: number): number {
    return this.sums[right + 1] - this.sums[left]
  }
}
