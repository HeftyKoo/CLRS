// 使用单数组实现双向链表，使用free对象来实现空间回收
module.exports = class LinkList {
  constructor (size) {
    this.linkList = new Array(size)
    this.size = size
    this.head = null
    this.tail = null
    this.free = null
    this.isFull = false
  }
  insert (x) {
    let tail
    if (this.head == null) {
      tail = 0
      this.head = tail
    } else {
      tail = this.tail + 3
      if (this.isFull || tail + 2 >= this.size) {
        tail = this.allocateObject()
        this.isFull = true
      }
    }
    
    const next = this.tail + 2
    const pre = tail + 1
    this.linkList[tail] = x
    this.linkList[pre] = this.tail
    this.linkList[next] = tail
    this.tail = tail
  }
  search (x) {
    if (this.head != null) {
      let next = this.head
      while (next != null && this.linkList[next] !== x) {
        next = this.linkList[next + 2]
      }
      return next
    }
  }
  delete (x) {
    const current = this.search(x)
    
    if (current != null) {
      const pre = this.linkList[current + 1]
      const next = this.linkList[current + 2]
  
      if (pre == null) {
        this.head = next
      } else {
        this.linkList[pre + 2] = next
      }
      if (next == null) {
        this.tail = pre
      } else {
        this.linkList[next + 1] = pre
      }

      this.freeObject(current)
    }
  }

  allocateObject () {
    if (this.free == null) {
      throw new Error('无空间')
    }
    const x = this.free
    this.free = this.linkList[x + 2]
    return x
  }

  freeObject (x) {
    this.linkList[x + 2] = this.free
    this.linkList[this.free + 1] = x
    this.free = x
  }
}
