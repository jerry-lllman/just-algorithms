/**
 * 
 * @leetcode https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 * 
 * 
 * 时间复杂度： push,pop O(1), increment O(min(k, ctn)) ctn 为栈中的值
 * 空间复杂度： O(1)
 */

class CustomStack {
	stack: number[] = []
	maxSize: number = 0
	constructor(maxSize: number) {
		this.maxSize = maxSize
	}

	push(x: number): void {
		if (this.stack.length < this.maxSize) {
			this.stack.push(x)
		}
	}

	pop(): number {
		return this.stack.pop() || -1
	}

	increment(k: number, val: number): void {
		for (let i = 0; i < k && i < this.stack.length; i++) {
			this.stack[i] += val
		}
	}
}

