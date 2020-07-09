/**
 * 对相同长度的英文字符串进行排序
 * 使用基数排序+计数排序实现
 * @param {*} arr 
 */
function stringRadixSort (arr) {
  const max = 'z'.charCodeAt()
  const n = arr[0].length

  for (let cur = n - 1; cur >= 0; cur--) {
    const countingArr = new Array(max + 1)

    for (let i = 0; i <= max; i++) {
      countingArr[i] = 0
    }

    for (let i = 0; i < arr.length; i++) {
      const charCode = arr[i][cur].charCodeAt()
      countingArr[charCode] = countingArr[charCode] + 1
    }

    for (let i = 1; i <= max; i++) {
      countingArr[i] = countingArr[i] + countingArr[i - 1]
    }

    const result = []
    for (let i = arr.length - 1; i >= 0; i--) {
      const current = arr[i]
      const charCode = current[cur].charCodeAt()
      const index = countingArr[charCode]
      result[index - 1] = current
      countingArr[charCode] = countingArr[charCode] - 1
    }
    arr = result
  }
  return arr
}

console.log(stringRadixSort(['COW', 'DOG', 'SEA', 'RUG', 'ROW', 'MOB', 'BOX', 'TAB', 'BAR', 'EAR', 'EAR', 'TAR', 'DUG', 'BIG', 'TEA', 'NOW', 'FOX']))