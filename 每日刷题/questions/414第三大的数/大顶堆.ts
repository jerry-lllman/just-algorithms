/**
 * 
 * @leetcode https://leetcode-cn.com/problems/third-maximum-number/
 * @description 使用大顶堆的特性
 */

// 堆需要做的事情
// push 在最后一位添加一个节点，然后向上比较
// pop 将堆顶元素移除，然后将最后一个放到堆顶，然后向下比较

class Heap {
	data: number[]
	constructor(data: number[] = []) {
		this.data = data
		this.heapify() // 初始化整个堆是没有规则的
	}

	private isLeftBig(a: number, b: number): boolean {
		return this.data[a] - this.data[b] > 0
	}

	private heapify() {
		if (this.size() > 1) {
			for (let i = 1; i < this.size(); i++) {
				this.shiftUp(i)
			}
		}
	}

	size() {
		return this.data.length
	}

	push(val: number) {
		this.data.push(val) // 将元素添加到堆中
		this.shiftUp(this.size() - 1) // 然后从堆中开始向上比较
	}

	peek() {
		return this.data[0]
	}

	pop() {
		if (this.size() < 2) return this.data.pop()
		const res = this.data[0] // 保存堆顶元素
		this.data[0] = this.data.pop() // 将堆中最后一个元素替换到堆顶
		this.shiftDown(0) // 从堆顶向下比较
		return res // 返回原堆顶元素
	}

	private swap(i: number, j: number) {
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
	}

	private shiftUp(index: number) {
		while(index) {
			const parentIndex = (index - 1) >> 1
			// 当前元素比父级元素大，那么就向上移
			if (this.isLeftBig(index, parentIndex)) {
				this.swap(parentIndex, index) // 数据上移交换
				index = parentIndex // 下次比较的位置也交换
			} else {
				// 不比上一级大就没有再比较的必要了
				break
			}
		}
	}
	private shiftDown(index: number) {
		const lastIndex = this.size() - 1
		while(index < lastIndex) {
			const leftIndex = index * 2 + 1
			const rightIndex = index * 2 + 2
			let tempIndex = index
			// 设置比较边界不能超出最后一位
			if (tempIndex <= lastIndex && this.isLeftBig(leftIndex, tempIndex)) {
				// 如果左边的位比当前位大，那么将左边位的下标与当前位的下标替换
				tempIndex = leftIndex
			}
			if (tempIndex <= lastIndex && this.isLeftBig(rightIndex, tempIndex)) {
				tempIndex = rightIndex
			}
			if (tempIndex !== index) {
				// 如果下标发生了变化，则互换数据与下次要比较的下标
				this.swap(tempIndex, index)
				index = tempIndex
			} else {
				// 否则没有比较大必要了
				break
			}
		}
	}
}

function thirdMax(nums: number[]): number {
  const data = [...new Set(nums)]
  if (data.length < 3) return Math.max(...data)
  const heap = new Heap(data)
  heap.pop()
  heap.pop()
  return heap.peek()
};