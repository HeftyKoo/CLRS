function printLCRSTree (tree) {
  if (!tree) return
  console.log(tree.key)
  printLCRSTree(tree.leftChild)
  let rs = tree.rightSibling
  while (rs) {
    printLCRSTree(rs)
    rs = rs.rightSibling
  }
}