
const { parent, left, right, swap} = require('./utils')
module.exports = function minHeapify (arr, i, heapSize) {
  const l = left(i)
  const r = right(i)

  let smallest = i
  if (l <= heapSize && arr[l] < arr[i]) {
    smallest = l
  }

  if (r <= heapSize && arr[r] < arr[largest]) {
    smallest = r
  }

  if (smallest !== i) {
    swap(arr, i, smallest)
    maxHeapify(arr, smallest, heapSize)
  }
}
