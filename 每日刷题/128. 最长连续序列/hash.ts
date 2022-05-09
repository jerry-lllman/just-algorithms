function longestConsecutive(nums: number[]): number {
  const hash = new Set(nums)
  let longestLength = 0
  let currentLength = 0
  for (let n of hash) {
    if (!hash.has(n - 1)) { // 判断是否连续最小位，如果是，则进入来找后面的数值
      currentLength = 1
      // 往下一个数字查找
      while (hash.has(n + 1)) currentLength++, n++;
      // 最后比较大小
      longestLength = Math.max(longestLength, currentLength)
    }
  }
  return longestLength
};