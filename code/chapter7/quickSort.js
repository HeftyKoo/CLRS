const { swap } = require('../../utils')

exports.partition = function partition (arr, p, r) {
  const x = arr[r]
  let i = p - 1

  for (let j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i++
      swap(arr, i, j)
    }
  }

  swap(arr, i + 1, r)
  return i + 1
}

exports.quickSort = function quickSort (arr, p = 0, r = arr.length - 1) {
  if (p < r) {
    const q = partition(arr, p, r)
    quickSort(arr, p, q - 1)
    quickSort(arr, q + 1, r)
  }
}

