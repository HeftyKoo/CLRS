const minHeapify = require('./minHeapify')

function buildMinHeap (arr) {
  for (let i = Math.floor(arr.length - 1 / 2); i >= 0; i--) {
    minHeapify(arr, i)
  }
}
