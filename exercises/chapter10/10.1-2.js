function twoStackInOneArray (size) {
  const arr = new Array(size)
  let firstTop = 0
  let secondTop = size - 1

  return {
    stack1: {
      push (x) {
        if (firstTop < secondTop) {
          firstTop++
          arr[firstTop] = x
        } else {
          throw new Error('上溢')
        }
      },
      pop () {
        if (firstTop > 0) {
          firstTop--
          return arr[firstTop + 1]
        } else {
          throw new Error('下溢')
        }
      }
    },
    stack2: {
      push (x) {
        if (firstTop < secondTop) {
          secondTop--
          arr[secondTop] = x
        } else {
          throw new Error('上溢')
        }
      },
      pop () {
        if (secondTop < size - 1) {
          secondTop++
          return arr[secondTop - 1]
        } else {
          throw new Error('下溢')
        }
      }
    }
  }
}