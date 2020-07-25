const treeMinimum = require('./treeMinimum')
function transplant (tree, u, v) {
  if (!u.p) {
    tree.root = v
  } else if (u === u.p.left) {
    u.p.left = v
  } else {
    u.p.right = v
  }

  if (v) {
    v.p = u.p
  }
}

function treeDelete (tree, z) {
  if (!z.left) {
    transplant(tree, z, z.right)
  } else if (!z.right) {
    transplant(tree, z, z.left)
  } else {
    let y = treeMinimum(z.right)
    if (y.p !== z) {
      transplant(tree, y, y.right)
      y.right = z.right
      y.right.p = y
    }
    transplant(tree, z, y)
    y.left = z.left
    y.left.p = y
  }
}