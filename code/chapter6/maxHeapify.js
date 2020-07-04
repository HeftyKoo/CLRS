
const { parent, left, right, swap} = require('./utils')
module.exports = function maxHeapify (arr, i, heapSize) {
  const l = left(i)
  const r = right(i)

  let largest = i
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l
  }

  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r
  }

  if (largest !== i) {
    swap(arr, i, largest)
    maxHeapify(arr, largest, heapSize)
  }
}
