const { parent } = require('./utils')
const { swap } = require('../../utils')
const maxHeapify = require('./maxHeapify')

class PriorityQueue {
  constructor () {
    this.arr = []
  }

  get maximum () {
    if (this.arr.length === 0) {
      throw new Error('队列为空')
    }
    return this.arr[0]
  }

  extractMax () {
    if (this.arr.length === 0) {
      throw new Error('队列为空')
    }

    const max = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr.length = this.arr.length - 1
    maxHeapify(this.arr, 0, this.arr.length - 1)
    return max
  }

  increaseKey (i, key) {
    if (key < this.arr[i]) {
      throw new Error('新值比当前值小')
    }

    this.arr[i] = key

    while (i > 0 && this.arr[parent(i)] < this.arr[i]) {
      swap(this.arr, i, parent(i))
      i = parent(i)
    }
  }

  insert (key) {
    const i = this.arr.length
    this.arr[i] = -Infinity
    this.increaseKey(i, key)
  }

  delete (i) {
    const heapSize = this.arr.length - 1
    if (this.arr[i] > this.arr[heapSize]) {
      this.arr[i] = this.arr[heapSize]
      maxHeapify(this.arr, i, heapSize - 1)
    } else {
      this.increaseKey(i, this.arr[heapSize])
    }
    this.arr.length = this.arr.length - 1
  }
}
