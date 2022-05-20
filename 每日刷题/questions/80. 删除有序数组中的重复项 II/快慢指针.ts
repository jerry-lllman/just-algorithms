/**
 * @leetcode https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/
 */

function removeDuplicates(nums: number[]) {
	const leng = nums.length
	if (leng <= 2) return leng
	let slow = 2, fast = 2
	while(fast < leng) {
		if (nums[slow - 2] !== nums[fast]) {
			// [1, 1, 1, 1, 2, 2, 2, 3, 3, 3]
      // 将 下标 2 的值赋值为 下标3 的值
			nums[slow] = nums[fast]
			slow++
		}
		fast++
	}
}