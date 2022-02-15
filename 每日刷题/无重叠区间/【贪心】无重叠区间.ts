/**
 * 
 * @leetcode地址 https://leetcode-cn.com/problems/non-overlapping-intervals/
 * 
 */

function eraseOverlapIntervals(intervals: number[][]): number {
	if (!intervals.length) return 0

	// 首先是根据数组第 1 位进行排序
	intervals.sort((a, b) => a[1] - b[1])

	const n = intervals.length
	// 获取第 0 个元素的第 1 个
	let right = intervals[0][1]
	let ans = 1
	for (let i = 1; i < n; ++i) {
		// 从下一个元素的第 0 个开始比较上一个元素的第 1 个
		// 如果后一个元素的第 0 位大于等于前一个元素则条件成立
		if (intervals[i][0] >= right) {
			++ans // 符合条件的数据 + 1
			right = intervals[i][1]
		}
	}
	// 最后 length - 符合条件的数量就等于需要去除掉的数量
	return n - ans
}