function findMaximumSubArray(array) {
  let sum = -Infinity
  let maxSum = -Infinity
  let low
  let high
  let currentLow
  let currentHigh

  for (let i = 0; i < array.length; i++) {
    currentHigh = i
    if (sum > 0) {
      sum = sum + array[i]
    } else {
      currentLow = i
      sum = array[i]
    }

    if (sum > maxSum) {
      low = currentLow
      high = currentHigh
      maxSum = sum
    }
  }

  return {low, high, sum: maxSum}
}
