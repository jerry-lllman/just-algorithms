import { TreeNode } from "../../algorithm/Node/TreeNode"

/**
 * @description https://leetcode.cn/problems/same-tree/
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (
		(!q && p)
		|| (!p && q)
		|| (p && q && p.val !== q.val)
	) return false
	return (p === q) || isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};