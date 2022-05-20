
class ListNode<T> {
	val: T
	next: ListNode<T> | null
	constructor(val: T, next?: ListNode<T> | null) {
		this.val = val
		this.next = next || null
	}
}

class Stack<T> {
	private list: ListNode<T> | null
	constructor() {
		this.list = null
	}
	push(val: T) {
		if (this.empty()) {
			// 当栈为空，直接将链表节点作为栈底（和栈顶元素存在）
			this.list = new ListNode(val)
		} else {
			// 当栈不为空，则将原栈中的列表作为栈下元素，新来的作为栈顶元素（链表头）
			this.list = new ListNode(val, this.list)
		}
	}
	pop(): T {
		if (this.empty()) return
		// 保存栈顶的值（链表头的值）
		const value = this.list.val
		// 将栈顶元素移除（移除链表头，将next作为新的链表头）
		this.list = this.list.next
		// 返回值
		return value
	}
	peek(): T {
		if (this.empty()) return
		return this.list.val
	}
	empty() {
		return this.list === null
	}
}
