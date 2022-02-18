class RandomizedSet {
	data: number[] = []
	hash: Map<any, any>  = new Map()
	constructor() { }

	private size(): number {
		return this.data.length
	}

	insert(val: number): boolean {
		// 这里不能用 has
		if (this.hash.get(val) === undefined) {
			this.data.push(val)
			this.hash.set(val, this.size() - 1)
			return true
		}
		return false
	}

	remove(val: number): boolean {
		// 删除将目标数据与最后一位交换，然后pop
		const index = this.hash.get(val) // 需要被移除的元素下标
		if (index > -1) {
			this.hash.set(this.data[this.size() - 1], index) // hash 中的值先改变一下
			this.hash.set(val, undefined) // 消除在 hash 中的记录
			this.data[index] = this.data[this.size() - 1] // 将最后一位与待删除位交换
			this.data.pop() // 将最后一位删除
			return true
		}
		return false
	}

	getRandom(): number {
		// 根据数组 length 来 Math.random 
		const index = Math.floor(Math.random() * this.data.length)
		return this.data[index]
	}
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/