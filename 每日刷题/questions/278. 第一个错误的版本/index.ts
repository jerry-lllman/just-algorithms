/**
 * @leetcode https://leetcode.cn/problems/first-bad-version/
 */


/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function (isBadVersion: any) {

  return function (n: number): number {
    let left = 1, right = n
    while(right - left > 3) {
      const mid = left + ((right - left) >> 1)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid
      }
    }
    for (; left <= right; left++) {
      if (isBadVersion(left)) return left
    }
  };
};