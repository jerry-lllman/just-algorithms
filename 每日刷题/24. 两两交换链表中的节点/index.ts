/**
 * @description https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function swapPairs(head: ListNode | null): ListNode | null {
	let dummyHead = new ListNode(0, head)
	let temp = dummyHead
	while (temp.next && temp.next.next) {
		const next1 = temp.next
		const next2 = temp.next.next
		temp.next = next2
		next1.next = next2.next
		next2.next = next1
		temp = next1
	}
	return dummyHead.next
};