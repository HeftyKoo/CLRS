const maxHeapify = require('./maxHeapify')

function buildMaxHeap (arr) {
  for (let i = Math.floor(arr.length - 1 / 2); i >= 0; i--) {
    maxHeapify(arr, i)
  }
}
