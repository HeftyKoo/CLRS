function insertionSort (arr) {
  if (arr.length <= 1) {
    return arr
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

console.log(insertionSort([1,6,9,4,2,0,5]))