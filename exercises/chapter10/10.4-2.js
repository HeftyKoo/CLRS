function printBinaryTree (tree) {
  if (!tree) return
  console.log(tree.key)
  printBinaryTree(tree.left)
  printBinaryTree(tree.right)
}
