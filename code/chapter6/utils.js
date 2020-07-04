// 根节点下标
exports.parent = function parent (i) {
  return Math.floor((i + 1) / 2) - 1
}

// 左节点下标
exports.left = function left (i) {
  return 2 * (i + 1) -1
}

// 右节点下标
exports.right = function right (i) {
  return 2 * (i + 1) + 1 - 1
}

exports.swap = function (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}