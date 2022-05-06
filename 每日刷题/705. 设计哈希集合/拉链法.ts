

import { ListNode } from "../24. 两两交换链表中的节点"

class MyHashSet {
  BASE = 100
  data: ListNode[]
  constructor() {
    this.data = new Array(this.BASE)
    for (let i = 0; i < this.BASE; i++) {
      this.data[i] = new ListNode(-1)
    }
  }

  add(key: number): void {
    let p = this.getListNode(key)
    while (p && p.next) {
      if (p.next.val === key) return
      p = p.next
    }
    p.next = new ListNode(key)
  }

  remove(key: number): void {
    let p = this.getListNode(key)
    while (p && p.next) {
      if (p.next.val === key) {
        p.next = p.next.next
        return
      }
      p = p.next
    }
  }

  contains(key: number): boolean {
    let p = this.getListNode(key)
    while (p && p.next) {
      if (p.next.val === key) return true
      p = p.next
    }
    return false
  }

  private getListNode(key: number) {
    return this.data[this.getHash(key)]
  }

  private getHash(key: number) {
    return key % this.BASE
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */