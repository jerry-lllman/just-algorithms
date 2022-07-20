/**
 * 
 * @leetcode https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 * 
 * 解题思路：
 * 1. 额外维护一个maxSize长度的数组，每次increment时将increments[k] += val，这样就将复杂度降低到了O(1)
 * 2. 在pop时将栈顶的值与对应在increments中的值相加返回，在返回之前将increments[top - 1] += increments[top]的值
 * 以上这两个操作就能满足increment将k(stack.length)个值都加val的要求了
 * 
 * 复杂度分析：
 * 时间复杂度： O(1)
 * 空间复杂度： 额外维护了一个大小为 maxSize 的数组，平均复杂度 O(maxSize/N)，N为操作次数
 */

class CustomStack {
	maxSize: number
	stack: number[] = []
	increments: number[]
	constructor(maxSize: number) {
		this.maxSize = maxSize
		this.increments = new Array(maxSize).fill(0)
	}

	push(x: number): void {
		if (this.stack.length < this.maxSize) {
			this.stack.push(x)
		}
	}

	pop(): number {
		const ind = this.stack.length - 1
		if (ind < 0) return -1
		if (ind > 0) {
			this.increments[ind - 1] += this.increments[ind]
		}
		const res = (this.stack.pop() as number) + this.increments[ind]
		this.increments[ind] = 0
		return res
	}

	increment(k: number, val: number): void {
		let i = Math.min(k, this.stack.length) - 1
		if (i >= 0) {
			this.increments[i] += val
		}
	}
}
