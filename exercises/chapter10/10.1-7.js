// 使用两个队列实现栈，不考虑上溢下溢的情况
class Queue {
  constructor (size) {
    this.queue = new Array(size)
    this.head = 0
    this.tail = 0
    this._size = size
  }
  enqueue (x) {
    this.queue[this.tail] = x
    if (this.tail === this._size - 1) {
      this.tail = 0
    } else {
      this.tail++
    }
  }
  dequeue () {
    const x = this.queue[this.head]
    if (this.head === this._size - 1) {
      this.head = 0
    } else {
      this.head++
    }
    return x
  }
  isEmpty () {
    return this.head === this.tail
  }
  size () {
    return this.tail - this.head
  }
}

class Stack {
  constructor () {
    this.queue1 = new Queue()
    this.queue2 = new Queue()
    this.active = this.queue1
    this.inactive = this.queue2
  }
  push (x) {
    this.active.enqueue(x)
  }
  pop () {
    while (this.active.size () !== 1) {
      this.inactive.enqueue(this.active.dequeue())
    }

    const temp = this.active
    this.active = this.inactive
    this.inactive = temp
    return this.inactive.dequeue()
  }
}
