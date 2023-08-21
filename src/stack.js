const { LinkedList } = require("./index")

class Stack {
  constructor() {
    this.list = new LinkedList()
  }

  add(value) {
    return this.list.prepend(value)
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

const stack = new Stack()

console.log(stack.add(1))
console.log(stack.add(2))
console.log(stack.add(3))
console.log(stack.add(4))

stack.pop()
stack.pop()
stack.pop()
stack.pop()

console.log("peek:", stack.peek())

stack.print()
