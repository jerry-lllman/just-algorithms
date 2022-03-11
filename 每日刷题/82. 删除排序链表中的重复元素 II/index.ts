/**
 * @leetcode https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 */


class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

// 我们以 [1,2,3,3,4,4,5] 为例
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head
	let ret = new ListNode(-1, head) // 创建空的头指针
	let slow = ret
	let fast = head
	while (fast && fast.next) {
		if (slow.next.val !== fast.next.val) { // 快慢指针的 next 元素值不相等时各前进一位
			fast = fast.next
			slow = slow.next
		} else {
			while (fast && fast.next && slow.next.val === fast.next.val) { // 快慢指针的 next 相等时（前后比较）
				fast = fast.next
			}
			// 重点在这儿：跳过当前已知的重复元素 比如此时 fast 走到了 1 2 3 3(走到了第二个 3 的位置，后面还有 4 4 5)
			// 此时 slow 指向 2，那么 slow 的 next 指向 fast.next 就直接跳过了重复的 3
			slow.next = fast.next
			fast = fast.next
		}
	}
	return ret.next
};
