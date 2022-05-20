/**
 * @leetcode https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/
 */

function minOperations(nums: number[], x: number): number {
	const sum = [0]
	for (let i = 1; i < nums.length + 1; i++) {
		sum[i] = sum[i - 1] + nums[i - 1]
	}
	let ans = -1
	for (let i = nums.length, s = 0; i >= 0; i--, s += nums[Math.max(i, 0)]) {
		const j = binarySeatch(sum, x - s)
		if (j === -1) continue
		const cnt = nums.length - i + j;
		if (cnt > nums.length) continue
		if (ans === -1 || nums.length - i + j < ans) {
			ans = nums.length - i + j
		}
	}
	return ans
}

function binarySeatch(nums: number[], x: number) {
	let left = 0, right = nums.length - 1
	while(right - left > 3) {
		const mid = (left + right) >> 1
		if (nums[mid] === x) return mid
		if (nums[mid] < x) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	for (; left <= right; left++) {
		if (nums[left] === x) return left
	}
	
	return -1
}