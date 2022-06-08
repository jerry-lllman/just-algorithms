
/**
 * @leetcode https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root: TreeNode | null): number {
	if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
