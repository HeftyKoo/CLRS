module.exports = function leftRotate (tree, x) {
  const y = x.right
  x.right = y.left

  if (y.left) {
    y.left.p = x
  }
  y.p = x.p
  if (!x.p) {
    tree.root = y
  } else if (x === x.p.left) {
    x.p.left = y
  } else {
    x.p.right = y
  }
  y.left = x
  x.p = y
}
