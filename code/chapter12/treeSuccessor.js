const treeMinimum = require('./treeMinimum')
function treeSuccessor (x) {
  if (x.right) {
    return treeMinimum(x.right)
  }

  let y = x.p

  while (y && y.right === x) {
    x = y
    y = x.p
  }

  return y
}