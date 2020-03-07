
function copyMatrix (arr, row, column) {
  const matrix = []
  for (let i = row[0]; i < row[1]; i++) {
    matrix.push(arr[i].slice(column[0], column[1]))
  }

  return matrix
}

function splitMatrix (arr) {
  const rows = arr.length
  const mid = Math.floor(rows / 2)
  const result = initMatrix(2)
  result[0][0] = copyMatrix(arr, [0, mid], [0, mid])
  result[0][1] = copyMatrix(arr, [0, mid], [mid, rows])
  result[1][0] = copyMatrix(arr, [mid, rows], [0, mid])
  result[1][1] = copyMatrix(arr, [mid, rows], [mid, rows])
  return result
}

function initMatrix (row) {
  return Array.from(new Array(row), () => [])
}

function addMatrix (...args) {
  let arr1 = args.shift()
  while (args.length) {
    const rows = arr1.length
    const result = initMatrix(rows)
    const [type, arr2] = args.splice(0, 2)
    for (let i = 0; i < rows; i++) {
      for(let j = 0; j < rows; j++) {
        result[i][j] = type === '+' ? (arr1[i][j] + arr2[i][j]) : (arr1[i][j] - arr2[i][j])
      }
    }
    arr1 = result
  }
  
  return arr1
}

function mergeMatrix (container, row, column, ...args) {
  let arr1 = args.shift()
  while (args.length) {
    const rows = arr1.length
    const result = initMatrix(rows)
    const [type, arr2] = args.splice(0, 2)
    for (let i = 0; i < rows; i++) {
      for(let j = 0; j < rows; j++) {
        result[i][j] = container[row + i][column + j] = type === '+' ? (arr1[i][j] + arr2[i][j]) : (arr1[i][j] - arr2[i][j])
      }
    }
    arr1 = result
  }
  
  return container
}

function strassen (arr1, arr2) {
  const rows = arr1.length

  if (rows === 1) {
    return [[arr1[0][0] * arr2[0][0]]]
  } else {
    const mid = Math.floor(rows / 2)
    const result = initMatrix(rows)
    const A = splitMatrix(arr1)
    const B = splitMatrix(arr2)

    const S1 = addMatrix(B[0][1], '-', B[1][1])
    const S2 = addMatrix(A[0][0], '+', A[0][1])
    const S3 = addMatrix(A[1][0], '+', A[1][1])
    const S4 = addMatrix(B[1][0], '-', B[0][0])
    const S5 = addMatrix(A[0][0], '+', A[1][1])
    const S6 = addMatrix(B[0][0], '+', B[1][1])
    const S7 = addMatrix(A[0][1], '-', A[1][1])
    const S8 = addMatrix(B[1][0], '+', B[1][1])
    const S9 = addMatrix(A[0][0], '-', A[1][0])
    const S10 = addMatrix(B[0][0], '+', B[0][1])

    const P1 = strassen(A[0][0], S1)
    const P2 = strassen(S2, B[1][1])
    const P3 = strassen(S3, B[0][0])
    const P4 = strassen(A[1][1], S4)
    const P5 = strassen(S5, S6)
    const P6 = strassen(S7, S8)
    const P7 = strassen(S9, S10)

    mergeMatrix(result, 0, 0, P5, '+', P4, '-', P2, '+', P6)
    mergeMatrix(result, 0, mid, P1, '+', P2)
    mergeMatrix(result, mid, 0, P3, '+', P4)
    mergeMatrix(result, mid, mid, P5, '+', P1, '-', P3, '-', P7)
    return result
  }
}

exports.strassen = strassen
