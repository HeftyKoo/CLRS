function rightRotate(tree, y) {
  const x = y.left
  y.left = x.right
  if (x.right) {
    x.right.p = y
  }
  x.p = y.p
  if (!y.p) {
    tree.root = x
  } else if (y.p.left === y) {
    y.p.left = x
  } else {
    y.p.right = x
  }
  x.right = y
  y.p = x
}
