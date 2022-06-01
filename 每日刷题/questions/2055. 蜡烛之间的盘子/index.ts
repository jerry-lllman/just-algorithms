/**
 * @leetcode https://leetcode.cn/problems/plates-between-candles/
 * 
 * 本题利用前缀和，取左右边进行计算
 */

function platesBetweenCandles(s: string, queries: number[][]): number[] {
	const leng = s.length
	const preSum = new Array(leng).fill(0)
	for (let i = 0, sum = 0; i < leng; i++) {
		if (s[i] === '*') {
			sum++
		}
		preSum[i] = sum
	}

	const left = new Array(leng).fill(0)
	for (let i = 0, l = -1; i < leng; i++) {
		if (s[i] === '|') {
			l = i
		}
		left[i] = l
	}

	const right = new Array(leng).fill(0)
	for (let i = leng - 1, r = -1; i >= 0; i--) {
		if (s[i] === '|') {
			r = i
		}
		right[i] = r
	}

	const ans = new Array(queries.length).fill(0)
	for (let i = 0; i < queries.length; i++) {
		const query = queries[i];
		
		const x = right[query[0]], y = left[query[1]];
		ans[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x];
	}
	return []
};