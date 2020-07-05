/**
 * 要求：数组为正整数，并且最大值max已知
 * @param {number[]} arr
 * @param {number} max arr的最大值
 */
function countingSort (arr, max) {
  const countingArr = new Array(max + 1)
  const result = new Array(arr.length)

  for (let i = 0; i <= max; i++) {
    countingArr[i] = 0
  }

  for (let i = 0; i <= arr.length; i++) {
    countingArr[arr[i]] = countingArr[arr[i]] + 1
  }

  for (let i = 1; i <= max; i++) {
    countingArr[i] = countingArr[i] + countingArr[i - 1]
  }

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const index = countingArr[current]
    result[index - 1] = current
    countingArr[current] = index - 1
  }

  return result
}
