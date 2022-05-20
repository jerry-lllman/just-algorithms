class Stack<T> {
	private data: T[] = []

	peek(): T {
		return this.data[this.size() - 1]
	}
	push(value: T) {
		this.data.push(value)
	}
	pop(): T {
		return this.data.pop()
	}
	empty() {
		return this.data.length === 0
	}
	size() {
		return this.data.length
	}
}
