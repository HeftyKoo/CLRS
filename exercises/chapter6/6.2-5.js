
const { parent, left, right, swap} = require('../../code/chapter6/utils')
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

    swap(arr, i, largest)
    i = largest
  }
}
