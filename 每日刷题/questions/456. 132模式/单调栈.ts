
/**
 * @leetcode https://leetcode-cn.com/problems/132-pattern/
 * @param nums 
 * @returns 
 */

function find132pattern(nums: number[]): boolean {
  let stack = [] // 单调递减栈
  let leng = nums.length
  let k = -Infinity
  for (let i = leng - 1; i >= 0; i--) {
    if (nums[i] < k) return true; // 如果当前元素比 已找到的 “3” 小，说明该值是 “1” 
    // while 条件：
    // 如果栈顶元素（栈内都是有机会成为“2”的元素）小于当前元素，说明当前元素比后面的值大，很有可能是作为 “3” 存在的
    // 这个while就是为了选出最大的那个 “2”，以保证上面的 nums[i] < k 成立时 nums[i] 是一定 “1”
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      k = Math.max(k, stack[stack.length - 1]); // 将栈顶元素与目前的最大值 k 做比较，选取最大值作为新 k
      stack.pop() // 将栈顶元素弹出
    }
    stack.push(nums[i]); // 说明当前元素比栈顶元素小
  }
  return false;
};