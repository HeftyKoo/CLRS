const { randomizedPartition } = require('../chapter7/randomizedQuickSort')
function randomizedSelect (arr, i, p = 0, r = arr.length - 1) {
  if (p === r) {
    return arr[p]
  }
  const q = randomizedPartition(arr, p, r)
  const k = q - p + 1

  if (i === k) {
    return arr[q]
  }

  if (i < k) {
    return randomizedSelect(arr, i, p, q -1)
  } else {
    return randomizedSelect(arr, i - k, q + 1, r)
  }
}