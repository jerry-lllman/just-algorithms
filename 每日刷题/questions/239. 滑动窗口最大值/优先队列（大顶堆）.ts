

interface HeapNode {
	value: number;
	index: number
}

class Heap {
	data: HeapNode[]
	constructor(data: HeapNode[] = []) {
		this.data = data
	}
	compare(a: number, b: number) {
		return this.data[a].value - this.data[b].value > 0
	}
	peek(): HeapNode {
		return this.data[0]
	}
	push(val: HeapNode) {
		this.data.push(val)
		this.shiftUp(this.size() - 1)
	}
	pop() {
		if (this.size() < 2) return this.data.pop()
		let res = this.data[0]
		this.data[0] = this.data.pop()
		this.shiftDown(0)
		return res
	}
	size() {
		return this.data.length
	}

	private swap(a: number, b: number) {
		[this.data[a], this.data[b]] = [this.data[b], this.data[a]];
	}

	private shiftUp(index: number) {
		while (index) {
			let parentIndex = (index - 1) >> 1
			if (this.compare(index, parentIndex)) {
				this.swap(index, parentIndex)
				index = parentIndex
			} else {
				break
			}
		}
	}

	private shiftDown(index: number) {
		const lastIndex = this.size() - 1
		while (index <= lastIndex) {
			let tempIndex = index
			let leftChildIndex = index * 2 + 1
			let rightChildIndex = index * 2 + 2
			if (leftChildIndex <= lastIndex && this.compare(leftChildIndex, tempIndex)) {
				tempIndex = leftChildIndex
			}
			if (rightChildIndex <= lastIndex && this.compare(rightChildIndex, tempIndex)) {
				tempIndex = rightChildIndex
			}
			if (tempIndex !== index) {
				this.swap(tempIndex, index)
				index = tempIndex
			} else {
				break
			}
		}
	}
}

function maxSlidingWindow(nums: number[], k: number): number[] {
	let heap = new Heap()
	let ans = []
	for (let i = 0; i < nums.length; i++) {
		heap.push({ value: nums[i], index: i })
		if (heap.size() < k) continue
		while (heap.peek().index <= i - k) { // 超出范围
			heap.pop()
		}
		ans.push(heap.peek().value)
	}
	return ans
};
