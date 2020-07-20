function printBinaryTree (tree) {
  if (!tree) return
  const stack = [tree]
  while (stack.length) {
    const node = stack.pop()
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
}
