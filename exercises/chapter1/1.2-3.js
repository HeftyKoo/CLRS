let n = 1

function exponential (base, k) {
  let result = base
  for (i = 1; i < k; i++) {
    result = result * base
  }
  return result
}
while ((100 * n * n) >= exponential(2, n)) {
  n = n + 1
}

console.log(n)