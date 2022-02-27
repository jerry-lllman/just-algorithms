/**
 * 
 * @leetcode https://leetcode-cn.com/problems/optimal-division/
 */

function optimalDivision(nums: number[]): string {
	return nums.length < 3 ? nums.join('/') : `${nums.shift()}/(${nums.join('/')})`
};