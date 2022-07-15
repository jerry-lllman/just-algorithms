// https://leetcode.cn/problems/add-to-array-form-of-integer/submissions/
// 解题思路：
// 遍历 num 从 num 的最后一位往前处理
// 1. 使用 k % 10 获得 k 最后一位数
// 2. 将其与 num[i] 的 进行相加 得到新的值 sum
// 3. 处理 sum>= 10 的情况后，将值添加到返回值 res 中

// 4. 遍历完 num 后 k 可能还余有数值(k > 0)，同样从后往前处理添加到数组res中
// 5. 翻转 res 即可
// 
// case：
// 1. k / 10 可能存在浮点数的问题，需要使用 Math.floor 向下取整
// 2. num[i] + k % 10 的值可能大于等于10，需要处理进位问题

function addToArrayForm(num: number[], k: number): number[] {
  const leng = num.length
  const res: number[] = []
  for (let i = leng - 1; i >= 0; i--) {
    let sum = num[i] + k % 10
    k = Math.floor(k / 10)
    if (sum >= 10) {
      k++
      sum -= 10
    }
    res.push(sum)
  }

  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10)
  }
  res.reverse()
  return res
};