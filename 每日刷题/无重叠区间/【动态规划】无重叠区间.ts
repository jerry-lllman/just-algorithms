/**
 * 
 * @leetcode地址 https://leetcode-cn.com/problems/non-overlapping-intervals/
 * 
 */

// 动态规划时间超限
function eraseOverlapIntervals(intervals: number[][]): number {
	if (!intervals.length) return 0

	// 首先是根据数组第 0 位进行排序
	intervals.sort((a, b) => a[0] - b[0])

	const n = intervals.length
	const f = new Array(n).fill(1) // 利用数组将每一个元素标记为 [1, 1, 1, 1, 1]

	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			// 将每位元素的最后一个元素与后一个元素的第一个元素做比较，如果符合小于等于的条件
			if (intervals[j][1] <= intervals[i][0]) { 
				// 如果符合条件则将这一位的值 + 1
				// 如 i = 1 时 [1, 2, 1, 1, 1]
				f[i] = Math.max(f[i], f[j] + 1) 
			}
		}
	}
	// 最后再将所有的值取最大数，通过 length - 最大数 得出需要移除的区间数量
	return n - Math.max(...f)
};