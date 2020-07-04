
const { parent, left, right} = require('./utils')
module.exports = function maxHeapify (arr, i) {
  const l = left(i)
  const r = right(i)

  let largest = i
  if (l <= arr.length - 1 && arr[l] > arr[i]) {
    largest = l
  }

  if (r <= arr.length - 1 && arr[r] > arr[largest]) {
    largest = r
  }

  if (largest !== i) {
    temp = arr[i]
    arr[i] = arr[largest]
    arr[largest] = temp
    maxHeapify(arr, largest)
  }
}
