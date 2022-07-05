/**
 * @leetcode https://leetcode.cn/problems/unique-paths-ii/
 */

 function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const row = obstacleGrid.length, col = obstacleGrid[0].length
  let dp = Array.from(new Array(row), () => new Array(col).fill(0))

  // 初始化
  if (obstacleGrid[0][0] === 0) {
    dp[0][0] = 1
  }

  // 边界条件
  for (let i = 1; i < row; i++) {
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = dp[i - 1][0]
    }
  }

  for (let j = 1; j < col; j++) {
    if (obstacleGrid[0][j] === 0) {
      dp[0][j] = dp[0][j - 1]
    }
  }

	//公式 k[i][j] = k[i][j - 1] + k[i - 1][j]
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
      }
    }
  }

  return dp[row - 1][col - 1]
};