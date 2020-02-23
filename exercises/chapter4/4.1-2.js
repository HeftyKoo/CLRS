function findMaximumSubArray (array) {
  let lowIndex
  let rightIndex
  let sum = -Infinity

  for (let i = 0; i < array.length; i++) {
    let currentSum = array[i]

    if (currentSum > sum) {
      sum = currentSum
      lowIndex = i
      rightIndex = i
    }

    for (let j = i + 1; j < array.length; j++) {
      currentSum += array[j]

      if (currentSum > sum) {
        sum = currentSum
        lowIndex = i
        rightIndex = j
      }
    }    
  }

  return {low: lowIndex, high: rightIndex, sum: sum}
}
