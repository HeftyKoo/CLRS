function inOrderTreeWalk (tree) {
  if (tree) {
    inOrderTreeWalk(tree.left)
    console.log(tree.key)
    inOrderTreeWalk(tree.right)
  }
}