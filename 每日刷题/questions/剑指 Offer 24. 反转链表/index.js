
/**
 * @leetcode https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 */

class ListNode {
	constructor(val, next = null) {
		this.val = val
		this.next = next
	}
}

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

function reveresList(head) {
	if (!head || !head.next) return head
	let p = reveresList(head.next) // 前面是在递
	head.next.next = head // 到这里开始归，第一次归的时候 head 是 4，那么 head.next 就是 5，然后将 5 的 next 指为 4
	head.next = null // 然后将 4 的 next 断开
	return p
}

reveresList(list)