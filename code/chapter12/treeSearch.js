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

function iterativeTreeSearch (x, k) {
  while (x && x.key !== k) {
    if (k < x.key) {
      x = x.left
    } else {
      x = x.right
    }
  }

  return x
}