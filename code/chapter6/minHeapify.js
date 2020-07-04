
const { parent, left, right} = require('./utils')
function minHeapify (arr, i) {
  const l = left(i)
  const r = right(i)

  let smallest = i
  if (l <= arr.length - 1 && arr[l] < arr[i]) {
    smallest = l
  }

  if (r <= arr.length - 1 && arr[r] < arr[largest]) {
    smallest = r
  }

  if (smallest !== i) {
    temp = arr[i]
    arr[i] = arr[smallest]
    arr[smallest] = temp
    maxHeapify(arr, smallest)
  }
}
