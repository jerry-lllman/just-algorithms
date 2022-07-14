/**
 * @leetcode https://leetcode.cn/problems/n-th-tribonacci-number/
 */

function tribonacci(n: number): number {
  const dp = new Array(n)

  dp[0] = 0
  dp[1] = dp[2] = 1

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n]
};