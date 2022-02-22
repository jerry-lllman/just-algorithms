function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0
  let longestLength = 0
  let hash = new Set(nums) // 去重
  let temp = 0
  for (let n of hash) {
    if (!hash.has(n - 1)) { // 判断是首位数字时进入判断
      temp = n
      let length = 1
      while(hash.has(temp + 1)) { // 往下一个数字看
        temp += 1
        length += 1
      }
      longestLength = Math.max(longestLength, length)
    }
  }
  return longestLength
};