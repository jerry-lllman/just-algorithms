// https://leetcode.cn/problems/add-to-array-form-of-integer/submissions/
// 解题思路:
// 从低位往高位处理
// 1. 将 k 与 num[i] 相加, k += num[i]
// 2. 将 k % 10 后添加到 res 中
// 3. 每次遍历都将 k /= 10
// 3. 返回 res

// case:
// 1. 注意 k / 10 需要处理浮点数的问题 k = Math.floor(k / 10)
// 2. 当 i < 0 时（即num遍历完了，k仍有余值）不再需要 k += num[i]

function addToArrayForm(num: number[], k: number): number[] {
  const res: number[] = []
  const leng = num.length
  for (let i = leng - 1; i >= 0 || k > 0; i--, k = Math.floor(k / 10)) {
    if (i >= 0) {
      k += num[i]
    }
    res.push(k % 10)
  }
  res.reverse()
  return res
};