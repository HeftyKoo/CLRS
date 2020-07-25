function preOrderTreeWalk(tree) {
  if (tree) {
    console.log(tree.key)
    preOrderTreeWalk(tree.left)
    preOrderTreeWalk(tree.right)
  }
}