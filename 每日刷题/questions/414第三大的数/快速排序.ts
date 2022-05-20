/**
 * 
 * @leetcode https://leetcode-cn.com/problems/third-maximum-number/
 * @description 使用快速排序
 */

function thirdMax(nums: number[]): number {
	quickSort(nums, 0, nums.length - 1)
	nums = [...new Set(nums)]
	let leng = nums.length < 3 ? nums.length - 1 : nums.length - 3
	return nums[leng]
}


function quickSort(nums: number[], left: number, right: number) {
	__quickSort(nums, left, right)
	__finalInserSort(nums, left, right)
}

const threshold = 16
function __quickSort(nums: number[], left: number, right: number) {
	while (right - left > threshold) {
		let x = left, y = right, base = getMedian(nums[left], nums[(left + right) >> 1], nums[right])
		while(x <=y) {
			while(nums[x] < base) x++
			while(nums[y] > base) y--
			if (x <= y) {
				[nums[x], nums[y]] = [nums[y], nums[x]]
				x++, y--
			}
		}
		__quickSort(nums, x, right)
		right = y
	}
}

function __finalInserSort(nums: number[], left: number, right: number) {
	let index = left
	for (let i = left + 1; i <= right; i++) {
		if (nums[i] < nums[index]) index = i // 将 index 置为最小值的位置
	}

	while (index > left) { // 从最小位置往左交换，一直将最小值放到下标 0 上
		[nums[index], nums[index - 1]] = [nums[index - 1], nums[index]]
		index--
	}
	// 之所以 + 2，是因为下标 0 已经保证是最小的了，下标 0 1 没有可比性
	for (let i = left + 2; i <= right; i++) {
		let j = i
		while(nums[j] < nums[j - 1]) { // 如果当前位置的值比前一个下标位置的值要小，则交换到排序的位置为止
			[nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
			j--
		}
	}
}

function getMedian(a: number,b: number,c: number) {
	if (a > b) {
		[a, b] = [b, a]
	}
	if (a > c) {
		[a, c] = [c, a]
	}
	if (b > c) {
		[b, c] = [c, b]
	}
	return b
}
