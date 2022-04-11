/**
 * @leetcode https://leetcode-cn.com/problems/reorder-list/submissions/
 * 
 * @description 这题的因为链表不能随机访问，所以开辟一个数组，利用数组能够随机访问的特性，实现链表的随机访问
 */

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function reorderList(head: ListNode | null): void {
	if (!head) return
	const arr: ListNode[] = []
	let cur = head
	while (cur) {
		arr.push(cur)
		cur = cur.next
	}
	let i = 0, j = arr.length - 1
	while (i < j) {
		arr[i].next = arr[j]
		i++
		arr[j].next = arr[i]
		j--
	}
	arr[i].next = null
}