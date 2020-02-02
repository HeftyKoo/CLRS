function binaryAdd(binaryArr1, binaryArr2) {
  const len = binaryArr1.length + 1
  const result = new Array(len)
  let carry = 0
  for (let i = binaryArr1.length - 1; i >= 0; i--) {
    result[i + 1] = (binaryArr1[i] + binaryArr2[i] + carry) % 2
    carry = Math.floor((binaryArr1[i] + binaryArr2[i] + carry) / 2)
  }
  result[0] = carry
  return result
}

console.log(binaryAdd([0,1,0], [1,1,1]))