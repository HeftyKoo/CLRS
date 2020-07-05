const buildMaxHeap = require('./buildMaxHeap')
const maxHeapify = require('./maxHeapify')
const { swap } = require('../../utils')

function heapSort (arr) {
  buildMaxHeap(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i)
    maxHeapify(arr, 0, i - 1)
  }
}
