import { ListNode } from "../ListNode.ts"

class ListNodeQueue<T> {
	private head: ListNode | null = null // 队列头（链表头）
	private tail: ListNode | null = null // 队列尾（链表尾）
	private _size: number = 0 // 队列中元素的个数

	size() {
		return this._size
	}

	empty() {
		return this.size() === 0
	}

	// 移除队首元素
	pop() {
		if (this.empty()) return
		// 获取当前队首的值
		const res = this.head as ListNode
		// 将队首设定为下一个元素
		this.head = (this.head as ListNode).next
		// 判断一下原队首是否等于队列尾，如果相等，说明在移除队首元素之前，当前队列中只有一个元素
		if (this.tail === res) {
			this.tail = null
		}
		this._size--
		// 最后返回其中的值
		return res.val
	}

	push(value: T) {
		const node = new ListNode(value)
		// 如果为空，则说明当前进来的元素会作为队首元素，同时也会是队尾元素
		if (this.empty()) {
			this.head = node
			this.tail = node
		} else {
			// 已经存在了就添加到队尾
			(this.tail as ListNode).next = node
			// 更新队尾
			this.tail = node
		}

		this._size++
	}

	front() {
		return this.head?.val
	}
	back() {
		return this.tail?.val
	}
}

const queue = new ListNodeQueue()

console.log(queue.empty())
console.log(queue.push(1))
console.log(queue.front())
console.log(queue.push(2))
console.log('back', queue.back())
console.log(queue.size())
console.log(queue.pop())
console.log(queue.size())

