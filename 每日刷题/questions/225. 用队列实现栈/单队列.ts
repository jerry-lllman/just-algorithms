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
  q: MyQueue = new MyQueue()
  constructor() { }

  push(x: number): void {
    this.q.push(x)
  }

  pop(): number {
    let target = this.q.size() - 1
    while (target--) {
      this.q.push(this.q.pop())
    }
    return this.q.pop()
  }

  top(): number {
    let target = this.q.size() - 1
    while (target--) {
      this.q.push(this.q.pop())
    }
    const res = this.q.peek()
    this.q.push(this.q.pop())
    return res
  }

  empty(): boolean {
    return this.q.empty()
  }
}
