function mergeSort(data: number[], l: number, r: number) {
	if (l >= r) return // 没有排序的必要了
	const mid = l + ((r - l) >> 1)
	mergeSort(data, l, mid) // 排序左边
	mergeSort(data, mid + 1, r) // 排序右边
	// 开辟一个临时存储区
	const temp = new Array(r - l + 1)
	// k 表示当前需要添加到临时存储区的指针
	// p1 表示当前左边区域待添加的指针
	// p2 同理，右区域待添加指针
	let k = 0, p1 = l, p2 = mid + 1
	// while 条件是左右两边都还有待添加的数据
	while (p1 <= mid || p2 <= r) {
		// 1. 如果 p2 已经走到头了（也就是右边为空了），
		// 2. 左边的值小于右边的值
		// 将左边的值添加到 temp 中
		if (p2 > r || (p1 <= mid && data[p1] <= data[p2])) {
			temp[k] = data[p1++]
		} else {
			// 否则添加右边的
			temp[k] = data[p2++]
		}
		k++
	}
	// 最后将排好序的值覆盖到原数组中
	for (let i = l; i <= r; i++) data[i] = temp[i - l]
}

const arr = [67, 328, 934, 378, 59, 245, 436, 7594, 2365, 7, 493, 26, 34, 578, 2]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)