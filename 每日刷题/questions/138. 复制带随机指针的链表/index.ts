/**
 * @leetcode 138. 复制带随机指针的链表
 */

// class Node {
// 	val: number;
// 	next: Node | null;
// 	random: Node | null;
// 	constructor(val: number, next: Node | null = null, random: Node | null = null) {
// 		this.val = val;
// 		this.next = next;
// 		this.random = random;
// 	}
// }

// function copyRandomList(head: Node | null): Node | null {
// 	if (!head) return null;
// 	const map = new Map();
// 	let cur = head;
// 	while (cur) {
// 		map.set(cur, new Node(cur.val));
// 		cur = cur.next;
// 	}
// 	cur = head;
// 	while (cur) {
// 		map.get(cur).next = map.get(cur.next);
// 		map.get(cur).random = map.get(cur.random);
// 		cur = cur.next;
// 	}
// 	return map.get(head);
// }

function copyRandomList(head: Node | null): Node | null {
	if (!head) return null;
	let cur = head;
	while (cur) {
		const next = cur.next;
		const copy = new Node(cur.val);
		cur.next = copy;
		copy.next = next;
		cur = next;
	}
	cur = head;
	while (cur) {
		const copy = cur.next;
		if (cur.random) {
			copy.random = cur.random.next;
		}
		cur = cur.next.next;
	}
	cur = head;
	const res = cur.next;
	while (cur) {
		const copy = cur.next;
		cur.next = copy.next;
		if (copy.next) {
			copy.next = copy.next.next;
		}
		cur = cur.next;
	}
	return res;
}