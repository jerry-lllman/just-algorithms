
/**
 * 
 * @leetcode https://leetcode-cn.com/problems/decode-string/
 */

function decodeString(s: string): string {
	let numStack = []									// 存倍数的栈
	let strStack = []									// 存 待拼接的 str 的栈
	let num = 0												// 倍数
	let result = ''										// 字母串
	for (let char of s) {
		if (isDigit(char)) {
			num = num * 10 + Number(char) // 计算倍数
		} else if (char === '[') { 			// 遇到了 [ 说明这一轮数字结束了
			strStack.push(result)			 		// 把前面处理了的字母都压入字符栈中
			result = ''
			numStack.push(num)						// 将倍数添加到倍数栈中
			num = 0
		} else if (char === ']') {			// 说明字母走完了，该讲本次走的字母 * 倍数
			let repeatTimes = numStack.pop() // 拿到本次该乘以的倍数
			result = strStack.pop() + result.repeat(repeatTimes) // 之前的字母 加上 （本次的字母 * 倍数）
		} else {
			result += char // 拼接字母
		}
	}
	return result // 最后返回整条字母串
}

function isDigit(ch: string) {
	return ch >= '0' && ch <= '9'
}

decodeString("2[abc]3[cd]ef")