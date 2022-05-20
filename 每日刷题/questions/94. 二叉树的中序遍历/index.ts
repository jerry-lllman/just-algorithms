/**
 * @leetcode https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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


function inorderTraversal(root: TreeNode): number[] {
	const ans: number[] = []
	inorder(root, ans)
	return ans
}

function inorder(root: TreeNode | null, ans) {
	if (!root) return
	inorder(root.left, ans)
	ans.push(root.val)
	inorder(root.right, ans)
}