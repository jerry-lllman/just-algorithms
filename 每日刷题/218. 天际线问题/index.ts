/**
 * @leetcode https://leetcode.cn/problems/the-skyline-problem/
 */

 getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]])

 function getSkyline(buildings: number[][]): number[][] {
	 let res = [], pq = [], pre = null
	 for (let b of buildings) {
		 pq.push([b[0], -b[2]])
		 pq.push([b[1], b[2]])
	 }
	 sort(pq)
	 let heights = [0]
 
	 for (let h of pq) {
		 if (h[1] < 0) {
			 heights.push(-h[1])
		 } else {
			 remove(heights, h[1])
		 }
		 let maxHeight = Math.max(...heights)
		 if (pre !== maxHeight) {
			 res.push([h[0], maxHeight])
			 pre = maxHeight
		 }
	 }
	 return res
 }
 
 
 function sort(arr: number[][]) {
	 arr.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
 }
 
 function remove(arr: number[], target: number) {
	 let index = arr.indexOf(target)
	 index >= 0 &&	arr.splice(index, 1)
 }