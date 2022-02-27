/**
 * @leetcode https://leetcode-cn.com/problems/validate-stack-sequences/
 */

 function validateStackSequences(pushed: number[], popped: number[]): boolean {
	let stack: number[] = [] // 创建一个新的栈，通过真实体验来验证 入栈出栈
  // i 表示 popped 的指针， j 表示 pushed 的指针
	for (let i = 0, j = 0; i < popped.length; i++) {
    // while 的条件：
    // 1. 当 j 指针跑完了出栈长度，并且
    // 2. stack 为空，或者栈顶元素不等于 popped的出栈元素popped[i]
    // 就入栈
		while(
			j < pushed.length
			&& (stack.length === 0 || stack[stack.length - 1] !== popped[i])
		) {
			stack.push(pushed[j++])
		}
    // 这里需要判断一下stack的栈顶元素是否等于popped的出栈元素
		if (stack[stack.length - 1] !== popped[i]) return false
		stack.pop() // 出栈
	}
	return true // for 循环跑完了说明整个出栈ok，验证成功
};