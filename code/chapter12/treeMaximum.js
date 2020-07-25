module.exports = function treeMaximum (x) {
  while (x.right) {
    x = x.right
  }
  return x
}