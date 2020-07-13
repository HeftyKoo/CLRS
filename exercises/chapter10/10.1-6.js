// NOTE 不考虑上溢和下溢，使用两个栈实现一个队列
class Stack {
  constructor () {
    this.stack = []
    this.top = 0
  }
  push (x) {
    this.stack[this.top] = x
    this.top++
  }
  pop () {
    const x = this.stack[this.top]
    this.top--
    return x
  }
  isEmpty () {
    this.top === 0
  }
}

class QueueWithTwoStack {
  constructor () {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }
  enqueue (x) {
    this.stack.push(x)
  }
  dequeue () {
    if (this.stack2.isEmpty()) {
      while(!this.stack1.isEmpty()) {
        this.stack2.push(this.stack2.pop())
      }
    }
    return this.stack2.pop()
  }
}