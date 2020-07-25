module.exports = function treeMinimum (x) {
  while (x.left) {
    x = x.left
  }
  return x 
}