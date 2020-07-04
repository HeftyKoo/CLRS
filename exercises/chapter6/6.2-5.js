
const { parent, left, right} = require('../../code/chapter6/utils')
function maxHeapify (arr, i) {
  while (true) {
    const l = left(i)
    const r = right(i)
    let largest = i
    if (l <= arr.length - 1 && arr[l] > arr[i]) {
      largest = l
    }
  
    if (r <= arr.length - 1 && arr[r] > arr[largest]) {
      largest = r
    }

    if (largest === i) {
      break
    }

    temp = arr[i]
    arr[i] = arr[largest]
    arr[largest] = temp
    i = largest
  }
}


maxHeapify([27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0], 2)