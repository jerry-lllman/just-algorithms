function missingNumber(nums: number[]): number {
  let left = 0, right = nums.length - 1
  while(left <= right) {
    let mid = (left + right) >> 1
    if (nums[mid] === mid) {
			// 中间数的值等于自己的下标，说明要找的目标在右边
      left = mid + 1
    } else {
			// 说明要找的数在左边
      right = mid - 1
    }
  }
  return left
};
