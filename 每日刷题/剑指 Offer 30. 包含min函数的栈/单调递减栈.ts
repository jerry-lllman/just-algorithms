class Stack {
  data: number[] = []
  constructor() {}
  push(val: number) {
    this.data.push(val)
  }
  pop(): number {
    return this.data.pop()
  }
  peek() {
    return this.data[this.size() - 1]
  }
  size() {
    return this.data.length
  }
}

class MinStack {
  data: number[] = []
  monotoneStack: Stack = new Stack() // 利用单调递减栈的方式，让栈顶始终保持着最小数
  constructor() {}
  push(x: number): void {
    this.data.push(x)
    if (!this.monotoneStack.size() || x <= this.monotoneStack.peek()) {
      this.monotoneStack.push(x) // 当 push 进来的数据为最小值时添加到单调递减栈中
    }
  }
  pop(): void {
    const n = this.data.pop()
    if (n <= this.min()) {
      this.monotoneStack.pop()
    }
  }
  top(): number {
    return this.data[this.data.length - 1]
  }
  min(): number {
    return this.monotoneStack.peek()
  }
}
