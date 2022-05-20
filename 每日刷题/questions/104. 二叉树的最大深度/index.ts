
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
  return getCount(root, 0)
};

function getCount(root: TreeNode | null, count: number) {
  if (!root) return 0
  const leftCount = getCount(root.left, count) + 1
  const rightCount = getCount(root.right, count) + 1
  return Math.max(leftCount, rightCount)
}