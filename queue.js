const { LinkedList } = require("./index")

class Queue {
  constructor() {
    this.list = new LinkedList()
  }

  add(value) {
    return this.list.append(value)
  }

  pop() {
    return this.list.remove(0)
  }

  peek() {
    return this.list.head?.value ?? null
  }

  isEmpty() {
    return this.list.isEmpty()
  }

  getSize() {
    return this.list.getSize()
  }

  print() {
    return this.list.print()
  }
}

const queue = new Queue()

console.log(queue.add(1))
console.log(queue.add(2))
console.log(queue.add(3))
console.log(queue.add(4))

console.log("Pop:", queue.pop())
console.log("peek:", queue.peek())

queue.print()
