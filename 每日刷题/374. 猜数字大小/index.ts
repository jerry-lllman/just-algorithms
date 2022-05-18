/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


 function guessNumber(n: number): number {
  let left = 0, right = n
  while(left <= right) {
    const mid = left + ((right - left) >> 1)
    if (guess(mid) === 0) return mid
    if(guess(mid) === -1) { // 当前mid大了，需要缩小范围
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
};