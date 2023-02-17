/**
 * 
 * @leetcode  https://leetcode.cn/problems/rotate-list/
 */

// 遍历链表，形成环形链表，同时记录链表长度 leng
// 移动 leng - k 个位置，就到了新的尾节点，下一个就是新的头节点了
// 断开尾节点与头节点的链接，返回新的头节点即可

function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (!head) return head
	let leng = 1
	let p = head
	while (p.next) {
		p = p.next
		leng++
	}
	p.next = head

	k %= leng
	k = leng - k
	while (k--) {
		p = p.next
	}
	head = p.next
	p.next = null
	return head
};