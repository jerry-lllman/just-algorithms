/**
 * @leetcode https://leetcode-cn.com/problems/gaM7Ch/
 * 
 * 示例：coins = [1, 2, 5], amount = 11
 * 1. 先确定转移方程
 * 设状态 f(x) = 最少用多少枚硬币拼出x。 比如 f(11) = 3

 * 2. 对于任意 x
 * 有表达式为：f(x) = min{ f(x - 1) + 1, f(x - 2) + 1, f(x - 5) +1 }
 *  	 其中： f(x)            ===> 拼出 x 所需最少的硬币数
 *        	 f(x - 1) + 1    ===> 拼出 x - 1 所需最少的硬币数，加上最后一枚硬币 1
 *        	 f(x - 2) + 1    ===> 拼出 x - 2 所需最少的硬币数，加上最后一枚硬币 2
 *        	 f(x - 5) + 1    ===> 拼出 x - 5 所需最少的硬币数，加上最后一枚硬币 5
 * 
 */


 function coinChange(coins: number[], amount: number): number {
  // 开辟长度为 amount + 1 的数组用于存储状态，默认状态为正无穷（之所以是 amount + 1 是因为从 0 - amount）
  const dp = new Array(amount + 1).fill(Infinity)
  // 初始化 f[0] = 0
  dp[0] = 0

  for (let x = 1; x <= amount; x++) { // x 为不同面额，从 f[1] 开始计算到 f[amount]
    
    for (let j = 0; j < coins.length; j++) { // 依次从钱包里拿不同面额的硬币出来
      
      // 条件一：x 的面额得大于从钱包里拿出来的硬币面额，才能使用从钱包里面里面拿出来的硬币，比如你不能使用 5块 去付 4块
      // 条件二：f[x - 2] 可以通过钱包内的硬币通过组合的方式付清（这个条件判断能付清，下一个条件判断是否还有更优方式）
      // 条件三：f[x - 5] 比 f[x] 得到的值更加的小（比如此时的 f[x] 由 f[x - 2] + 1 得到）
      if (
        x >= coins[j]
        && dp[x - coins[j]] !== Infinity 
        && dp[x - coins[j]] + 1 < dp[x]
      ) {
        // 如果能付清，并且当前 f[x - 5] 的方案比 f[x - 2] 的方案更优（使用硬币数更少），则更新 f[x] 的使用最少硬币方案
         dp[x] = dp[x - coins[j]] + 1 // f[x - 5] 是子方案, + 1 是加上本次使用的硬币
      }
      
    }
    
  }
  // 根据约定 dp[x] 为 ∞ 时返回 -1，否则返回使用硬币数量
  return dp[amount] === Infinity ? -1 : dp[amount]
};