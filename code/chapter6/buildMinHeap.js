const minHeapify = require('./minHeapify')

module.exports = function buildMinHeap (arr, heapSize = arr.length - 1) {
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    minHeapify(arr, i, heapSize)
  }
}
