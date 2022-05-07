/**
 * @leetcode https://leetcode-cn.com/problems/subdomain-visit-count/
 * @param cpdomains 
 * @returns 
 */

function subdomainVisits(cpdomains: string[]): string[] {
  const hash = {}

  cpdomains.forEach(item => {
    let [count, domainName] = item.split(' ')

    const names = domainName.split('.')
    const leng = names.length

    for (let i = leng - 1; i >= 0; i--) {
      if (i !== leng - 1) names[i] += `.${names[i + 1]}` // 域名组合
      hash[names[i]] = hash[names[i]] ? hash[names[i]] + Number(count) : Number(count)
    }
  })

  const ans: string[] = []
  for (let key in hash) {
    ans.push(`${hash[key]} ${key}`)
  }
  return ans
};

