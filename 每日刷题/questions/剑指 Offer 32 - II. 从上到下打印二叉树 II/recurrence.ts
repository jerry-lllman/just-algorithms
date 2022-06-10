import { TreeNode } from "../../algorithm/Node/TreeNode"

/**
 * @leetcode https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 */


function levelOrder(root: TreeNode | null): number[][] {
	const res = []
	getResult(root, 0, res)
	return res
};

function getResult(root: TreeNode | null, k: number, ans: number[][]) {
	if (!root) return
	if (!ans[k]) ans[k] = []
	ans[k].push(root.val)
	getResult(root.left, k + 1, ans)
	getResult(root.right, k + 1, ans)
}