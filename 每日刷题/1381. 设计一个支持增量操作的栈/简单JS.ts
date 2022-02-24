

/**
 * 
 * @leetcode https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 * @description 这题用 js 做非常的简单，使用数组处理无解
 * 	使用其他语言也很简单，increment 的时候无非就是先 pop 出来用一个栈（stackTemp）存下来，操作完以后再从stackTemp pop 出来 push 到原栈中即可
 * 
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

/**
* Your CustomStack object will be instantiated and called as such:
* var obj = new CustomStack(maxSize)
* obj.push(x)
* var param_2 = obj.pop()
* obj.increment(k,val)
*/