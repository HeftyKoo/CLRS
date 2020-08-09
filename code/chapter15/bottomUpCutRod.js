function bottomUpCutRod(price, n) {
  const cache = {}
  cache[0] = 0

  for (let j = 1; j <=n; j++) {
    let q = -Infinity
    for (let i = 1; i <= j; i++) {
      q = Math.max(q, price[i] + cache[j - i])
    }
    cache[j] = q
  }

  return cache[n]
}
