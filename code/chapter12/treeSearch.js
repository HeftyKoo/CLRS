function treeSearch (x, k) {
  if (!x || x.key === k) {
    return x
  }

  if (k < x.key) {
    return treeSearch(x.left, k)
  } else {
    return treeSearch(x.right, k)
  }
}
