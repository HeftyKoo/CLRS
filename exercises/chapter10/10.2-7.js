function reverseLinkList (linkList) {
  let result
  while (linkList) {
    result = {key: linkList.key, next: result}
    linkList = linkList.next
  }
  return result
}
