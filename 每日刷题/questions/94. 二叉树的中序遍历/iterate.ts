/**
 * @leetcode https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */

function inorderTraversal(root: TreeNode | null): number[] {
	const ans: number[] = []
	if (!root) return ans
	let stk = []
	while(root || stk.length) {
		while(root) {
			stk.push(root)
			root = root.left
		}
		root = stk.pop()
		ans.push(root.val)
		root = root.right
	}
	return ans
}
