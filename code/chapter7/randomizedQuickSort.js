const { swap } = require('../../utils')
const { partition } = require('./quickSort')

function randomizedPartition (arr, p, r) {
  const i = parseInt(Math.random() * (r - p) + p, 10)
  swap(arr, i, r)
  return partition(arr, p, r)
}

function randomizedQuickSort (arr, p = 0, r = arr.length - 1) {
  if (p < r) {
    const q = randomizedPartition(arr, p, r)
    randomizedQuickSort(arr, p, q - 1)
    randomizedQuickSort(arr, q + 1, r)
  }
}