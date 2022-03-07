
/**
 * @leetcode https://leetcode-cn.com/problems/valid-parentheses/ 
 *
 */

const hashMap = new Map([
  [')', '('],
  [']', '['],
  ['}', '{'],
])

function isValid(s: string): boolean {
  if (!Number.isInteger(s.length / 2)) return false 
  const stack = []
  let leng = s.length
  for(let i = 0; i < leng; i++) {
    if (hashMap.has(s[i])) { // 判断来的是否为右括号
      if (!stack.length || stack[stack.length - 1] !== hashMap.get(s[i])) {
        // stack 为空   或者    栈顶对应不是左括号
        return false
      }
      stack.pop()
    } else { // 来的是左括号
      stack.push(s[i])
    }
  }
  return stack.length === 0
};