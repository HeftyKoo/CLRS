const {swap} = require('../../utils')

function partition (arr, p, r, x) {
  let i = p - 1

  for (let j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i++
      swap(arr, i, j)
    }
  }

  return i + 1
}

// NOTE：这种实现方式会改动原数组
function select (arr, i, p = 0, r = arr.length - 1) {
  if (arr.length === 1) return arr[0]
  if (p === r) return arr[p]

  const medianList = []
  // 将数组每5个元素分成一组，并且使用插入排序对每组进行排序，排序后再获取每组的中位数
  for (let t = p; t < r; t += 5) {
    const last = (t + 5) < r ? t + 5 : r
    const mediaIndex = t + Math.ceil((last - t - 1) / 2)
    for (let j = t; j <= last; j++) {
      for (let k = j + 1; k <= last; k++) {
        if (arr[k] < arr[j]) {
          swap(arr, k, j)
        }
      }
    }
    medianList.push(arr[mediaIndex])
  }
  // 获取中位数的中位数
  const x = select(medianList, Math.ceil(medianList.length / 2))

  // 经过partition后，数组会分成两区[...p1, ...p2]
  // p1区都不大于x，p2区都大于x
  const q = partition(arr, p, r, x)
  const k = q - p // 上半区个数

  // 如果选择的位数和上半区个数相等，因为上半区的最大值为x，则返回的值为x
  if (i === k) return x

  // 如果选择的位数比上半区小，则要选择的值必定落在上半区，继续在上半区找
  if (i < k) {
    return select(arr, i, p, q - 1)
  } else {
    // 如果选择的位数比上半区个数大，则在下半区找 i - k 位置的值
    return select(arr, i - k, q, r)
  }
}