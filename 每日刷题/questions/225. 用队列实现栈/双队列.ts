
class MyQueue {
  data: number[] = []
  constructor() { }
  push(x: number) {
    this.data.push(x)
  }
  pop(): number {
    return this.data.shift()
  }
  peek(): number {
    return this.data[0]
  }
  empty(): boolean {
    return this.data.length === 0
  }
  size(): number {
    return this.data.length
  }
}

class MyStack {
  q1: MyQueue = new MyQueue()
  q2: MyQueue = new MyQueue()
  constructor() { }

  push(x: number): void {
    if (!this.q1.empty()) {
      this.q1.push(x)
    } else {
      this.q2.push(x)
    }
  }

  pop(): number {
    if (this.q1.size()) {
      while (this.q1.size() !== 1) {
        this.q2.push(this.q1.pop())
      }
      return this.q1.pop()
    } else {
      while (this.q2.size() !== 1) {
        this.q1.push(this.q2.pop())
      }
      return this.q2.pop()
    }
  }

  top(): number {
    let last = 0
    if (!this.q1.empty()) {
      while (!this.q1.empty()) {
        last = this.q1.pop()
        this.q2.push(last)
      }
    } else {
      while (!this.q2.empty()) {
        last = this.q2.pop()
        this.q1.push(last)
      }
    }
    return last
  }

  empty(): boolean {
    return this.q1.empty() && this.q2.empty()
  }
}
