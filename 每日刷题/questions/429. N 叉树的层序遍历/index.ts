class NodeN {
	val: number
	children: NodeN[]
	constructor(val?: number, children?: NodeN[]) {
		this.val = val === undefined ? 0 : val
		this.children = children === undefined ? [] : children
	}
}

function levelOrder(root: NodeN | null): number[][] {
	if (!root) return []
	const res: number[][] = []
	const queue: NodeN[] = [root] // 首先将根节点放入队列
	while (queue.length) {
		const size = queue.length
		const level: number[] = []
		for (let i = 0; i < size; i++) { // 根据 length 判断是否还有下一层
			const node = queue.shift()
			level.push(node.val) // 将当前层的值放入结果数组
			queue.push(...node.children) // 将下一层的节点放入队列
		}
		res.push(level)	// 将当前层的值放入结果数组
	}
	return res
}