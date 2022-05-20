
/**
 * 
 * @leetcode https://leetcode-cn.com/problems/basic-calculator-ii/
 * @description 这题总体和 394 题差不多
 */

function calculate(s: string): number {
  s = s.replace(/ /g, ''); // 首先去头尾的空格
  const stack = [];
  let preSign = '+';
  let num = 0; // 倍数值（从字符串中拿到的最终数字）
  const n = s.length;
  for (let i = 0; i < n; ++i) {
    if (!isNaN(Number(s[i]))) {
      num = num * 10 + Number(s[i]);
    }
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (preSign) {
        case '+':
          stack.push(num); // 遇到 +  - 直接入栈
          break;
        case '-':
          stack.push(-num); // 遇到减号取反就行
          break;
        case '*':
          stack.push(stack.pop() * num); // 遇到 * / 将上一位拿出来处理了再入栈
          break;
        default:
          stack.push(stack.pop() / num | 0);
      }
      preSign = s[i]; // 更新符号
      num = 0; // 重置数字
    }
  }
  let ans = 0;
  while (stack.length) { // 剩余的都是进行 +  - 符号的数字了
    ans += stack.pop();
  }
  return ans;
};

