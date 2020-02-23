function findMaxCrossingSubArray(array, low, mid, high) {
  let leftSum = -Infinity
  let rightSum = -Infinity
  let leftIndex
  let rightIndex

  let sum = 0

  for (let i = mid; i >= low; i--) {
    sum += array[i]
    if (sum > leftSum) {
      leftSum = sum
      leftIndex = i
    }
  }

  sum = 0
  for (let i = mid + 1; i <= high; i++) {
    sum += array[i]
    if (sum > rightSum) {
      rightSum = sum
      rightIndex = i
    }
  }

  return {leftIndex, rightIndex, sum: leftSum + rightSum}
}

function findMaximumSubArray (array, low = 0, high = array.length) {
  if (low === high) {
    return {low, high, sum: array[low]}
  }

  const mid = Math.floor((low + high) / 2)

  const {low: lowLeftIndex, high: lowRightIndex, sum: lowSum} = findMaximumSubArray(array, low, mid)
  const {low: hightLeftIndex, high: hightRightIndex, sum: hightSum} = findMaximumSubArray(array, mid + 1, high)
  const {leftIndex: crossLeftIndex, rightIndex: crossRightIndex, sum: crossSum} = findMaxCrossingSubArray(array, low, mid, high)

  if (lowSum >= hightSum && lowSum >= crossSum) {
    return {low: lowLeftIndex, high: lowRightIndex, sum: lowSum}
  } else if (hightSum >= lowSum && hightSum >= crossSum) {
    return {low: hightLeftIndex, high: hightRightIndex, sum: hightSum}
  } else {
    return {low: crossLeftIndex, high: crossRightIndex, sum: crossSum}
  }
}
