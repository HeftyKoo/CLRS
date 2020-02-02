function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let miniIndex = i
    const current = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[miniIndex]) {
        miniIndex = j
      }
    }
    arr[i] = arr[miniIndex]
    arr[miniIndex] = current
  }
  return arr
}

console.log(selectionSort([3,1,4,2,5,7,1]))