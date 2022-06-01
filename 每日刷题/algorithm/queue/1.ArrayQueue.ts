

class ArrayQueue<T> {
	private data: T[] = []

	// 查看队头元素
	head(): T {
		return this.data[0]
	}
	// 查看队尾元素
	tail(): T{
		return this.data[this.size - 1]
	}
	// 入队
	enqueue(value: T) {
		this.data.push(value)
	}
	// 出队
	dequeue() {
		return this.data.shift()
	}
	get size() {
		return this.data.length
	}
}