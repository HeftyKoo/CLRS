const {insertionSort} = require('../chapter2/insertionSort')

function bucketSort (arr) {
  const n = arr.length
  const bucketArr = new Array()
  
  for (let i = 0; i < n - 1; i++) {
    bucketArr[i] = new Array()
  }

  for (let i = 0; i < n; i++) {
    bucketArr[Math.floor(n * arr[i])].push(arr[i])
  }

  for (let i = 0; i < n - 1; i++) {
    bucketArr[i] = insertionSort(bucketArr[i])
    
  }

  let result = []
  for (let i = 0; i < n - 1; i++) {
    result = result.concat(bucketArr[i])
  }

  return result
}
