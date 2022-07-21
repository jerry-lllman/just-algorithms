/**
 * @leetcode https://leetcode.cn/problems/max-chunks-to-make-sorted-ii/
 */

/**
 * 解题思路：
 *  利用单调栈，当审查元素比栈顶元素小，则从栈顶开始对比栈内每一个元素，将大于审查元素的全部剔除，维持住单调性
 *  
 * 复杂度分析：
 *   时间复杂度：O(n)
 *   空间复杂度：O(n)
 */
 function maxChunksToSorted(arr: number[]): number {
  let incStack: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (incStack.length && arr[i] < incStack[incStack.length - 1]) {
      const temp = incStack[incStack.length - 1]
      // 将小的元素剔除，维护单调栈的单调性
      while (incStack[incStack.length - 1] > arr[i]) incStack.pop()
      // 最后再将审查元素添加到栈内
      incStack.push(temp)
    } else {
      incStack.push(arr[i])
    }
  }
  return incStack.length
};