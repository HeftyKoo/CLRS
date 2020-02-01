// 习题1.2-2
function getBaseLog (x, y) {
  return Math.log(y) / Math.log(x)
}

function insertionSort (n) {
  return 8 * n * n
}

function mergeSort (n) {
  return 64 * n * getBaseLog(2, n)
}

function whenInsertionSortIsBetter () {
  let n = 2
  while ((insertionSort(n) < mergeSort(n)) && (insertionSort(n + 1) < mergeSort(n + 1))) {
    n = n + 1
  }

  return n
}

console.log(whenInsertionSortIsBetter())
