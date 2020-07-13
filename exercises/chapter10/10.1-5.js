// 双端队列
class deque {
  constructor (size) {
    this.head = 0
    this.tail = 0
    this.size = size
    this.queue = new Array(size)
  }

  isEmpty () {
    return this.head === this.tail
  }

  isFull () {
    return this.head === this.tail + 1 || (this.head === 0 && this.tail === this.size - 1)
  }
  tailEnQueue (x) {
    if (this.isFull()) {
      throw new Error('下溢')
    } else {
      if (this.tail === this.size - 1) {
        this.tail = 0
      } else {
        this.tail++
        this.queue[this.tail] = x
      }
    }
  }
  tailDeQueue () {
    if (this.isEmpty()) {
      throw new Error('上溢')
    } else {
      const x = this.queue[this.tail]
      if (this.tail === 0) {
        this.tail = this.size - 1
      } else {
        this.tail--
      }
      return x
    }
  }
  headEnQueue (x) {
    if (this.isFull()) {
      throw new Error('下溢')
    } else {
      if (this.head === 0) {
        this.head = this.size - 1
      } else {
        this.head--
      }
      this.queue[this.head] = x
    }
  }
  headDeQueue () {
    if (this.isEmpty()) {
      throw new Error('上溢')
    } else {
      const x = this.queue[this.head]
      if (this.head === this.size - 1) {
        this.head = 0
      } else {
        this.head++
      }
      return x
    }
  }
}