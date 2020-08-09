function memoizedCutRodAux (price, n, cache) {
  if (cache[n] >= 0) {
    return cache[n]
  }
  
  let q = -Infinity
  if (n === 0) {
    q = 0
  } else {
    for (let i = 1; i <=n; i++) {
      q = Math.max(q, price[i] + memoizedCutRodAux(price, n - i, cache))
    }
  }
  cache[n] = q
  return q
}
