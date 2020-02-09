function horner (arr, x) {
  let result = 0
  for (i = arr.length - 1; i > 0; i--) {
    result = x * (result + arr[i])
  }
  result = result + arr[0]
  return result
}

function nativeHorner (arr, x) {
  let result = arr[0]
  for (let i = 1; i < arr.length; i++) {
    let temp = 1
    for (j = 1; j <= i; j++) {
      temp = temp * x
    }
    result = result + arr[i] * temp
  }
  return result
}

console.log(horner([0,-1,3, -1, 1], 5), nativeHorner([0,-1,3, -1, 1], 5))