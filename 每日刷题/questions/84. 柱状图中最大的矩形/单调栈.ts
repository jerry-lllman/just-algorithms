
/**
 * @leetcode https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * @param heights 
 * @returns 
 */

//  该题目用栈求解的思路是：

//  1.先将题目给定的数组左右各添加一个元素0，为了方便确定原有数组中第一个元素和最后一个元素能不能继续扩张；
 
//  2.然后开始从左到右依次遍历数组中的元素：
 
//  3-1.如果栈为空或者当前考察的新元素值比栈顶元素值大，表明以栈顶元素值为高的矩形面积暂不能确定，所以就将当前考察的新元素入栈。在这个条件下，栈中的元素值从栈底到栈顶是依次递增的；
 
//  3-2.如果栈不为空且当前考察的新元素值比栈顶元素值小，表明以栈顶元素值为高的矩形的面积是可以确定的了。该矩形的高就是栈顶元素值，其右侧边界就是当前考察的新元素，左侧边界是栈顶元素的前一个元素，因为，在上一步中我们知道栈中元素值从栈底到栈顶是依次递增的。 因此，矩形的宽是当前考察的元素索引与栈顶元素前一个元素的索引的差值减一。
 
//  这里需要注意的是，当栈顶元素出栈后，需要继续看当前考察的新元素值是否大于新的栈顶元素值，如果是，就继续将栈顶元素弹出，然后计算以其值为高的矩形面积，直到当前考察的新元素值大于栈顶元素值时，当前考察元素入栈。
 
//  最后，由于最终计算矩形面积时，是用两个柱子的索引来确定矩形宽度的。因此，栈中存储的应该是给定数组的索引。
 

function largestRectangleArea(heights: number[]): number {
  let res = 0
  let stack = []
  heights.unshift(0) // 添加左边界
  heights.push(0) // 添加右边界
  for (let i = 0; i < heights.length; i++) {
    while(stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      // 栈不为空，并且栈顶元素大于当前考察元素，表示当前的矩形范围是可以确定的
      let rInd = stack.pop() // 保留目前为止最大元素的下标
      let lInd = stack[stack.length - 1] // 获得左边的下标
      let width = i - lInd - 1 // 当前元素下标 - 左边得到宽
      res = Math.max(res, width * heights[rInd]) // 最后取最大值
    }
    stack.push(i)
  }
  return res
};