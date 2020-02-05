function interactiveBinarySearch (arr, v, low = 0, high = arr.length - 1) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (v === arr[mid]) {
      return mid
    } else if (v > arr[mid]) {
      low = mid + 1
    } else {
      high = mid + 1
    }
  }

  return null
}

console.log(interactiveBinarySearch([1,2,3,4,5,6], 2))

function recursiveBinarySearch (arr, v, low = 0, high = arr.length -1) {
  if (low > high) {
    return null
  }
  const mid = Math.floor((low + high) / 2)
  if (v === arr[mid]) {
    return mid
  } else if (v > arr[mid]) {
    return recursiveBinarySearch(arr, v, mid + 1, high)
  } else {
    return recursiveBinarySearch(arr, v, low, mid - 1)
  }
}

console.log(recursiveBinarySearch([1,2,3,4,5,6], 6))