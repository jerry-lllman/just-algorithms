/**
 * @leetcode https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */

class Stack {
  data: number[] = []
  constructor() { }
  peek(): number {
    return this.data[this.data.length - 1]
  }
  push(x: number) {
    this.data.push(x)
  }
  pop() {
    return this.data.pop()
  }
  empty() {
    return this.data.length === 0
  }
}

class MyQueue {
  input: Stack = new Stack()
  output: Stack = new Stack()
  constructor() { }

  push(x: number): void {
    this.input.push(x)
  }

  pop(): number {
    if(this.output.empty()) { // 判断 output 为空，需要尝试从左边去拿 元素过来，如果右边存在元素的话就直接返回 top
      while(!this.input.empty()) {
        this.output.push(this.input.pop())
      }
    }
    return this.output.pop()
  }

  peek(): number {
    if(this.output.empty()) {
      while(!this.input.empty()) {
        this.output.push(this.input.pop())
      }
    }
    return this.output.peek()
  }

  empty(): boolean {
    return this.input.empty() && this.output.empty()
  }
}
