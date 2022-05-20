
/**
 * @leetcode https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * 
 * 递归比较不好理解，可以使用栈来帮助处理
 * 
 */

class ListNode {
  val: number
  next: ListNode
	constructor(val = 0, next: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

function __reverseN(head: ListNode, n: number) {
  if (n === 1) return head // 如果是 1 个，则不翻转
  let tail = head.next
  let p = __reverseN(head.next, n - 1)
  head.next = tail.next // 原头节点的 next 指向后面还未处理的节点
  tail.next = head // 把断开的原头节点补上
  return p // 最终返回翻转后的头节点
}

function reverseN(head: ListNode, n: number) {
  let p = head
  let cnt = n
  while(--n && p) { // 根据数量判断是否需要翻转
    p = p.next
  }
  if (!p) return head // 判断的结果，如果不够 n 个翻转的数量，则不翻转
  return __reverseN(head, cnt) // 真正的翻转
}

function reverseKGroup(head: ListNode | null, k: number) {
  let ret = new ListNode(0, head) // 创建虚拟头节点
  let p = ret // 指向虚拟头节点
  let q = p.next // q 默认指向真正的 head
  while((p.next = reverseN(q, k)) !== q) {
		// 第一轮 reverseN 的结果为 [2, 1, 3, 4, 5]； q 为 [1, 3, 4, 5]； ret 为 [0, 2, 1, 3, 4, 5]
		// 第二轮 reverseN 的结果为 [4, 3, 5]；       q 为 [3, 5]；       ret 为 [0, 2, 1, 4, 3, 5]
		// 第三轮 reverseN 的结果为 [5]，退出循环

    p = q; 
		// 第一轮原本的 p 为 [0, 2, 1, 3, 4, 5]; 此时 p = [1, 3, 4, 5]
		// 第二轮原本的 p = [3, 5]；             此时 p = [1, 4, 3, 5]

    q = p.next 
		// 第一轮 q = [3, 4, 5]
		// 第二轮 q = [5]
  }
  return ret.next
};