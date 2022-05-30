/**
 * @leetcode https://leetcode.cn/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * @param nums 
 * @param k 
 * @returns 
 */

function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let ans = Infinity
  for (let i = 0; i < nums.length - k + 1; i++) {
    ans = Math.min(ans, nums[i + k - 1] - nums[i])
  }
  return ans
};