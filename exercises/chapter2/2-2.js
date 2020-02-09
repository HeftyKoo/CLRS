function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = arr.length -1; j > i; j--) {
      if (arr[j] < arr[j-1]) {
        arr[j - 1] = arr[j]
      }
    }
  }
  return arr
}

console.log(bubbleSort([3,1,2,5,3,6]))