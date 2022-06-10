/**
 * @leetcode https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */


function preorderTraversal(root: TreeNode | null): number[] {
	const res = []
	if (!root) return res

	const stk = []
	let node = root
	while(stk.length || node) {
		while(node) {
			res.push(node.val)
			stk.push(node)
			node = node.left
		}
		node = stk.pop()
		node = node.right
	}
	return res
}