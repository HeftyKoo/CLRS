const maxHeapify = require('./maxHeapify')

module.exports = function buildMaxHeap (arr, heapSize = arr.length - 1) {
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(arr, i, heapSize)
  }
}
