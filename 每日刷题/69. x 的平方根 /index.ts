/**
 * @leetcode https://leetcode.cn/problems/sqrtx/
 */

function mySqrt(x: number): number {
	let left = 0, right = x, ans = -1, mid = 0
	while (left <= right) {
		mid = (left + right) >> 1
		if (mid * mid <= x) {
			// 平方还小于等于 x，则 left 右移（当前数字太小，向右缩小搜索范围）
			ans = mid
			left = mid + 1
		} else {
			// 当前的数字太大，向左缩小搜索范围
			right = mid - 1
		}
	}
	return ans
}