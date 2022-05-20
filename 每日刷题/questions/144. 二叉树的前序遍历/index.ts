/**
 * @leetcode https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */

 class TreeNode {
	val: number;
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val || 0
		this.left = left || null
		this.right = right || null
	}
}

function preorderTraversal(root: TreeNode | null): number[] {
	const ans: number[] = []
	traversal(root, ans)
	return ans
}

function traversal(root: TreeNode | null, ans: number[]) {
	if (!root) return
	ans.push(root.val)
	traversal(root.left, ans)
	traversal(root.right, ans)
}