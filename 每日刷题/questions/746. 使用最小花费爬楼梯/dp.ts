/**
 * @leetcode https://leetcode.cn/problems/min-cost-climbing-stairs/
 */

 function minCostClimbingStairs(cost: number[]): number {
  // dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])

  const n = cost.length

  const dp = new Array(n + 1)
  dp[0] = dp[1] = 0

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[n]
};