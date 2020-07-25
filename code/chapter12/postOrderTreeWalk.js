function postOrderTreeWalk (tree) {
  if (tree) {
    postOrderTreeWalk(tree.left)
    postOrderTreeWalk(tree.right)
    console.log(tree.key)
  }
}