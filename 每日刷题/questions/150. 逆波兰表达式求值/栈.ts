/**
 * 
 * @leetcode https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 * @param tokens 
 * @returns 
 */

// 这题比较简单，就是遇到数字时入栈，遇到操作符号时出栈两次，然后根据符号做处理，再入栈
// 最后返回栈中数据
function evalRPN(tokens: string[]): number {
  const stack = []
  const ops = ['+', '-', '*', '/']
  for (let i = 0; i < tokens.length; i++) {
    if (ops.includes(tokens[i])) {
      let a = stack.pop()
      let b = stack.pop()
      let temp = 0
      if (tokens[i] === '+') {
        temp = b + a
      } else if (tokens[i] === '-') {
        temp = b - a
      } else if (tokens[i] === '*') {
        temp = b * a
      } else if (tokens[i] === '/') {
        temp = b / a
      }
      stack.push(parseInt(temp + '')) // 注意这里保留整数部分
    } else {
      stack.push(Number(tokens[i]))
    }
  }
  return stack[0]
};