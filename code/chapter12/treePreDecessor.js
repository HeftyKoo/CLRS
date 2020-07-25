const treeMaximum = require('./treeMaximum')
function treePreDecessor (x) {
  if (x.left) {
    return treeMaximum(x.left)
  }
  let y = x.p
  while (y && y.left === x) {
    x = y
    y = x.p
  }
  return y
}