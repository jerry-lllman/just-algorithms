/**
 * @leetcode https://leetcode.cn/problems/design-circular-queue/
 */

class MyCircularQueue {
  k: number
  private head: ListNode<number> | null
  private tail: ListNode<number> | null
  private count: number = 0
  constructor(k: number) {
    this.k = k
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false
    const node = new ListNode(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      this.tail.next = node
    }
      this.tail = node
    this.count++
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false

    this.head = this.head.next
    if (this.count === 1) {
      this.tail = null
    }
    this.count--
    return true
  }

  Front(): number {
    return this.head?.val ?? -1
  }

  Rear(): number {
    return this.tail?.val ?? -1
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  isFull(): boolean {
    return this.count === this.k
  }
}
