/**
 * @leetcode https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */


class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val || 0
		this.next = next || null
	}
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	if (!head) return head
	let count = right - left + 1
	let temp = new ListNode(0, head)
	let prev = temp
	while(--left) {
		prev = prev.next
	}
	// 走到要反转的节点位置进行反转
	prev.next = reverseN(prev.next, count)
	return temp.next
}

function reverseN(head: ListNode, n: number) {
	if (n === 1) return head
	let tail = head.next
	let p = reverseN(head.next, n--)
	head.next = tail.next
	tail.next = head
	return p
}