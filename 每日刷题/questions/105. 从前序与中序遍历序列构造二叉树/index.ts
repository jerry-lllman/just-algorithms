import { TreeNode } from "../../algorithm/Node/TreeNode";
/**
 * @leetcode https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (!preorder.length) return null // 边界条件

	// 根据前序遍历的第一位(root)找到它在中序遍历中的位置，那么在中序遍历中的该位置的左右两边就分别是左子树和右子树的节点了
	const rootIndex = inorder.indexOf(preorder[0])

	// 构建左子树的前序遍历和左子树的中序遍历
	const leftPreorder = [], leftInorder = []
	for (let i = 0; i < rootIndex; i++) {
		// 左子树的前序遍历（前序遍历的第一个是根结点，后面才是左子树）
		leftPreorder.push(preorder[i + 1])
		// 左子树的中序遍历
		leftInorder.push(inorder[i])
	}

	// 构建右子树的前序遍历和右子树的中序遍历
	const rightPreorder = [], rightInorder = []
	for (let i = rootIndex + 1; i < preorder.length; i++) {
		rightPreorder.push(preorder[i])
		rightInorder.push(inorder[i])
	}

	// 构建树同时递归的构建左子树和右子树
	return new TreeNode(preorder[0], buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder))
}