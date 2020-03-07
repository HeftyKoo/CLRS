const { strassen } = require('./4.2-2')

function isP2 (num) {
  return (num & (num - 1)) === 0
}

function nextP2 (num) {
  // 已经是二的幂
  if (isP2(num)) {
    return num
  } else {
    let val = 1
    while (num > val) { // 2 的幂只有第一位为1，其余的为零，每次左移，直至找到第一个比num大的幂
      val = val << 1
    }
    return val
  }
}

function extendMatrix (arr, addNum) {
  const columnLength = arr[0].length + addNum
  const addArr = new Array(addNum).fill(0)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].concat(addArr)
  }
  
  const length = arr.length
  for (let i = 0; i < addNum; i++) {
    arr[length + i] = new Array(columnLength).fill(0)
  }
  return arr
}

function minusMatrix (arr, num) {
  arr = arr.slice(0, arr.length - num)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, arr[i].length - num)
  }
  return arr
}

function universalStrassen (arr1, arr2) {
  const rows = arr1.length
  if (isP2(rows)) {
    return strassen(arr1, arr2)
  } else {
    const nextRows = nextP2(rows)
    const num = nextRows - rows

    arr1 = extendMatrix(arr1, num)
    arr2 = extendMatrix(arr2, num)

    const result = strassen(arr1, arr2)
    return minusMatrix(result, num)
  }
}

// console.log(universalStrassen([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]], [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]))