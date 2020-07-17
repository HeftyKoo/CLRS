class LinkList {
  constructor () {
    this.head = null
  }
  insert (key) {
    const current = {
      key
    }
    if (this.head) {
      current.next = this.head
    }
    this.head = current
  }
  delete (key) {
    if (this.head.key === key) {
      this.head = null
    }
    let current = this.head
    while (current.next && current.next.key !== key) {
      current = current.next
    }

    if (current.next) {
      current.next = current.next.next
    }
  }
  search (key) {
    let current = this.head
    while (current && current.key !== key ) {
      current = current.next
    }
    return current
  }
}
