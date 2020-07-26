const leftRotate = require('./leftRotate')
const rightRotate = require('./rightRotate')


const RED = 'red'
const BLACK = 'black'
function redBlackTreeInsert (tree, z) {
  let x = tree.root
  let y
  while(x) {
    y = x
    if (z.key < x.key) {
      x = x.left
    } else {
      x = x.right
    }
  }
  z.p = y
  if (!y) {
    tree.root = z
  } else if (z.key < y.key) {
    y.left = z
  } else {
    y.right = z
  }
  z.color = RED
  redBlackTreeInsertFixup(tree, z)
}

function redBlackTreeInsertFixup (tree, z) {
  while (z && z.p && z.p.color === RED) {
    const grandParent = z.p.p
    if (grandParent) {
      if (z.p === grandParent.left) {
        let y = grandParent.right
        if (y.color === RED) {
          z.p.color = BLACK
          y.color = BLACK
          grandParent.color = RED
          z = grandParent
        } else if (z === z.p.right) {
          z = z.p
          leftRotate(tree, z)
        }
        z.p.color = BLACK
        grandParent.color = RED
        rightRotate(tree, grandParent)
      } else {
        let y = grandParent.left
        if (y.color === RED) {
          z.p.color = BLACK
          y.color = BLACK
          grandParent.color = RED
          z = grandParent
        } else if (z === z.p.left) {
          z = z.p
          rightRotate(tree, z)
        }
        z.p.color = BLACK
        grandParent.color = RED
        leftRotate(tree, grandParent)
      }
    }
  }
}