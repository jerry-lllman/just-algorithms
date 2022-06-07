import { TreeNode } from "../../algorithm/Node/TreeNode"

/**
 * @description https://leetcode.cn/problems/binary-tree-postorder-traversal/
 * @param root 
 * @returns 
 */

function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  postorder(root, ans)
  return ans
};

function postorder(root: TreeNode | null, res: number[]) {
  if (!root) return
  postorder(root.left, res)
  postorder(root.right, res)
  res.push(root.val)
}