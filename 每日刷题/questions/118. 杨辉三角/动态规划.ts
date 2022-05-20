/**
 * @leetcode https://leetcode-cn.com/problems/pascals-triangle/
 * 
 * @description 这题用动态规划来解还是很简单的，主要是确定好初始值、公式，以及边界条件
 * 
 * 初始值 dp[0] = [1]
 * 公式为：dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
 * 边界条件为：dp[i][0] = 1, dp[i][i] = 1
 */


function generate(numRows: number): number[][] {
	const dp = new Array(numRows)
	dp[0] = [1]
	for (let i = 1; i < numRows; i++) {
		dp[i] = new Array(i + 1)
		for (let j = 0; j < dp[i].length; j++) {
			if (j === 0 || j === dp[i].length - 1) { // 边界条件
				dp[i][j] = 1
			} else {
				dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
			}
		}
	}
	return dp
};