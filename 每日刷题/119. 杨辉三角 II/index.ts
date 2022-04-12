/**
 * @leetcode https://leetcode-cn.com/problems/pascals-triangle-ii/
 * @param rowIndex 
 * @returns 
 */

function getRow(rowIndex: number): number[] {
  let dp = new Array(rowIndex + 1)
  dp[0] = [1] // 初始值
  for (let i = 1; i < dp.length; i++) {
    dp[i] = [1] // 边界条件
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
    dp[i].push(1) // 边界条件
  }
  return dp[rowIndex]
};