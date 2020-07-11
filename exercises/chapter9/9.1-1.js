function findSecondary (arr) {
  let min
  let secondary
  if (arr[0] < arr[1]) {
    min = arr[0]
    secondary = arr[1]
  } else {
    min = arr[1]
    secondary = arr[0]
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > min) {
      if (arr[i] < secondary) {
        secondary = arr[i]
      }
    } else {
      secondary = min
      min = arr[i]
    }
  }

  return {
    min,
    secondary
  }
}

console.log(findSecondary([323,4,6,2,1,4,6,0]))