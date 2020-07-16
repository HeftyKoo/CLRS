class Queue {
  constructor () {
    this.head = null
    this.tail = null
  }
  isEmpty () {
    return !this.head
  }
  enqueue (x) {
    const current = {
      key: x
    }
    if (this.tail) {
      this.tail.next = current
      this.tail = current
    } else {
      this.tail = current
      this.head = current
    }
  }
  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Queue is empty')
    }
    const current = this.head
    this.head = current.next
    return current.key
  }
}
