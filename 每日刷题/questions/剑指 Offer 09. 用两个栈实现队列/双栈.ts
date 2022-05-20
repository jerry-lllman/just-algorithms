
/**
 * @leetcode https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */

class Stack {
  data: number[] = []
  constructor() {}
  size() {
    return this.data.length
  }
  push(value: number) {
    this.data.push(value)
  }
  peek() {
    return this.data[this.size() - 1]
  }
  pop(): number | undefined {
    return this.data.pop()
  }
}

class CQueue {
  inStack: Stack = new Stack()
  outStack: Stack = new Stack()
  constructor() {}

  appendTail(value: number): void {
    this.inStack.push(value)
  }

  deleteHead(): number {
    if (this.outStack.size()) { // 如果 out栈 内存在元素，则从 out 栈中 pop
      return this.outStack.pop()
    }
    while(this.inStack.size()) { // 否则的话讲 in栈 内的元素都倒到 out 栈中
      this.outStack.push(this.inStack.pop())
    }
    return this.outStack.pop() || -1 // 最后在 out 栈中 pop
  }
}
