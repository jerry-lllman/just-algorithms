/**
 * @leetcode https://leetcode.cn/problems/find-the-duplicate-number/
 */

 function findDuplicate(nums: number[]) {
  let slow = 0, fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
