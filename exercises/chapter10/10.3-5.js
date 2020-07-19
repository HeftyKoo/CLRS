const LinkList = require('./10.3-3')
const { swap } = require('../../utils')

class CompactifyList extends LinkList {
  compactify () {
    let next = this.head
    let index = 0
    while (next != null) {
      const nextPointer = this.linkList[next + 2]
      this.changePointer(next, index)
      this.changePointer(index, next)
      swap(this.linkList, next, index)
      swap(this.linkList, next + 1, index + 1)
      swap(this.linkList, next + 2, index + 2)
      next = nextPointer
      index = index + 3
    }
  }
  changePointer (before, after) {
    const pre = this.linkList[before + 1]
    const next = this.linkList[before + 2]

    if (before === this.head) {
      this.head = after
    }

    if (before === this.tail) {
      this.tail = after
    }

    if (before === this.free) {
      this.free = after
    }

    if (pre) {
      this.linkList[pre + 2] = after
    }

    if (next) {
      this.linkList[next + 1] = after
    }
  }
}
