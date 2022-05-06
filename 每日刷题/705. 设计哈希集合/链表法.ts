/**
 * @leetcode https://leetcode-cn.com/problems/design-hashset/
 */

import { ListNode } from "../24. 两两交换链表中的节点"

class MyHashSet {
  private data: ListNode
  constructor() {
    this.data = new ListNode(-1)
  }

  add(key: number): void {
    let p = this.data
    while (p && p.next) {
      if (p.next.val === key) return
      p = p.next
    }
    p.next = new ListNode(key)
  }

  remove(key: number): void {
    let p = this.data
    while(p && p.next) {
      if (p.next.val === key) {
        p.next = p.next.next
        return
      }
      p = p.next
    }
  }

  contains(key: number): boolean {
    let p = this.data
    while (p && p.next) {
      if (p.next.val === key) return true
      p = p.next
    }
    return false
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */