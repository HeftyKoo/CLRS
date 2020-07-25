function treeInsert (tree, z) {
  let y = null
  while (tree) {
    y = tree
    if (tree.key < z.key) {
      tree = tree.left
    } else {
      tree = tree.right
    }
  }

  z.p = y
  if (!y) {
    return z
  }

  if (z.key < y.key) {
    y.left = z
  } else {
    y.right = z
  }
  return tree
}