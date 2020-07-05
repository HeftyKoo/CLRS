/**
 * 要求：数组为正整数，并且最大值max已知
 * @param {number[]} arr
 * @param {number} max arr的最大值
 */
function countingRange (arr, k, min, max) {
  const countingArr = new Array(k + 1)

  for (let i = 0; i <= k; i++) {
    countingArr[i] = 0
  }

  for (let i = 0; i <= arr.length; i++) {
    countingArr[arr[i]] = countingArr[arr[i]] + 1
  }

  for (let i = 1; i <= k; i++) {
    countingArr[i] = countingArr[i] + countingArr[i - 1]
  }


  return countingArr[max] - (min === 0 ? 0 : countingArr[min - 1])
}

console.log(countingRange([4,2,1,4,6,7,2,4,5,7,2,1,0,2], 7, 0, 4))