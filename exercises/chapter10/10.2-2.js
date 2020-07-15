class Stack {
  constructor () {
    this.linkList = {}
  }
  push (x) {
    const obj = {
      key: x
    }
    if (this.linkList.head) {
      obj.next = this.linkList.head
    }
    this.linkList.head = obj
  }
  pop () {
    if (!this.linkList.head) {
      throw new Error('Stack is empty')
    }
    const value = this.linkList.head.key
    this.linkList.head = this.linkList.head.next
    return value
  }
}
