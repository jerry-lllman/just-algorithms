/**
 * @leetcode https://leetcode.cn/problems/fibonacci-number/
 */

 function fib(n: number): number {
  // 公式 dp[n] = dp[n - 1] + dp[n - 2]
  const dp = new Array(n)

  // 初始化与边界条件
  dp[0] = 0
  dp[1] = 1
  
  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};