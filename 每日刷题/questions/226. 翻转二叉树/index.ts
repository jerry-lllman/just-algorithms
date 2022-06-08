/**
 * @leetcode https://leetcode.cn/problems/invert-binary-tree/
 */

 function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root; // 当二叉树为空时直接返回它（边界条件）
  // const temp = root.left
  // root.left = root.right
  // root.right = temp
  // 与下等同，下面这种写法记得在上面那句加上分号
  [root.left, root.right] = [root.right, root.left] // 将root的左右节点进行交换
  invertTree(root.left) // 翻转左子树（记住不要展开看，它就是能保证能将左子树翻转）
  invertTree(root.right) // 翻转右子树
  return root // 返回翻转后的结果
};