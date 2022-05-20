function hasCycle(head: ListNode | null): boolean {
	const hash = new Set()
	while (head) {
		if (hash.has(head)) return true
		hash.add(head)
		head = head.next
	}
	return false
}