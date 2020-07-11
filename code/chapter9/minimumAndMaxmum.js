/**
 * 同时寻找最大值最小值
 * 如果数组长度为奇数，则将最大值和最小值的初始值都设置为数组的第一个元素，遍历的索引指向第3个元素
 * 如果数组长度为偶数，则将数组前两个值取出，较大值设置为最大值的初始值，较小值设置为最小值的初始值，遍历的开始索引指向第四个元素
 * 接下来，每次遍历取出两个数，比较这两个数的大小，较大值和当前最大值比较，如果比当前最大值大，则将当前最大值设置为这个数
 * 较小都和当前最小值比较，如果比当前最小值小，则将当前最小值设置为这个数
 * 这样只需要 3 * Math.floor(n / 2) 次比较主可以找到最大值和最小值
 * 如果每轮遍历都比较最大值和最小值，则至少需要2n - 2次比较
 * @param {*} arr 
 */
function minimumAndMaxmum (arr) {
  if (!arr.length) {
    throw new Error('The array can not be empty!')
  }
  if (arr.length < 2) {
    return {
      min: arr[0],
      max: arr[0]
    }
  } 

  const length = arr.length
  let min
  let max
  let startIndex

  if (length % 2) {
    min = arr[0]
    max = arr[0]
    startIndex = 2
  } else {
    startIndex = 3
    if (arr[0] < arr[1]) {
      min = arr[0]
      max = arr[1]
    } else {
      min = arr[1]
      max = arr[0]
    }
  }

  for (let i = startIndex; i < length; i += 2) {
    const pre = arr[i -1]
    const current = arr[i]
    if (current > pre) {
      if (current > max) {
        max = current
      }
      if (pre < min) {
        min = pre
      }
    } else {
      if (current < min) {
        min = current
      }
      if (pre > max) {
        max = pre
      }
    }
  }

  return {
    min,
    max
  }
}
