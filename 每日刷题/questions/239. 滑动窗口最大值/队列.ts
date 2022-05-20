
/**
 * @leetcode https://leetcode-cn.com/problems/sliding-window-maximum/
 * @param nums 
 * @param k 滑动窗口大小
 * @returns 
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  let q = [], res = []
  for (let i = 0; i < nums.length; i++) {
    while(q.length && nums[q[q.length - 1]] < nums[i]) { // while 窗口内最后一位元素小于即将入队列的元素，则将最后一位元素移除
      q.pop()
    }
    q.push(i) // 保存下标
    if (i - q[0] === k) q.shift() // 超出窗口范围将前面的移除
    if (i + 1 < k) continue // 仍在窗口范围则继续
    res.push(nums[q[0]]) // 因为前面的 while 将保持 0 位为最大值，所以将窗口内第 0 位保存到结果中
  }
  return res
};