/**
 * @description https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 */

export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function swapPairs(head: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0, head) // 需要一个虚拟头节点
  let temp = dummyHead
  while(temp.next && temp.next.next) { // 因为是两两交换，所以需要判断两个next
    const next1 = temp.next // 拿到第一个 next
    const next2 = temp.next.next // 拿到第二个 next
    temp.next = next2 // 将当前的 temp.next 指向 第二个 next         //// 也就是将  1 的 next 指向 3
    next1.next = next2.next // 再将 next1.next 指向 next2.next     //// 将 2 的 next 指向 4
    next2.next = next1 // 接着将 next2.next 指向为 next1            //// 再将 3 的 next 指向  2，至此完成交换
    temp = next1 // 完成交换，处理下一个节点
  }
	return dummyHead.next
};