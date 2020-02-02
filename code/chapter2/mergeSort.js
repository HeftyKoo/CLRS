function mergeSort(arr) {
  const length = arr.length;
  if (length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  const result = []
  let l = 0
  let r = 0

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      result.push(left[l])
      l++
    } else {
      result.push(right[r])
      r++
    }
  }

  while (l < left.length) {
    result.push(left[l])
    l++
  }

  while (r < right.length) {
    result.push(right[r])
    r++
  }

  return result
}

console.log(mergeSort([1,3,4,2,1,2,3,5,7,2]))