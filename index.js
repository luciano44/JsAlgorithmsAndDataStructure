class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return
    if (index === 0) return this.prepend(value)

    const node = new Node(value)
    let prev = this.head
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next
    }
    node.next = prev.next
    prev.next = node
    this.size++
    if (node.next === null) this.tail = node
  }

  remove(index) {
    if (index < 0 || index > this.size - 1) return null

    if (index === 0) {
      if (this.size === 1) this.tail = null
      const deleted = this.head.value
      this.head = this.head.next
      this.size--
      return deleted
    }

    let prev = this.head
    let toRemove
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next
    }
    toRemove = prev.next
    prev.next = toRemove.next
    this.size--
    if (toRemove.next === null) this.tail = prev
    return toRemove.value
  }

  reverse() {
    let prev = null
    let next
    do {
      next = this.head.next
      this.head.next = prev
      prev = this.head
      if (next) this.head = next
    } while (next)
  }

  search(value) {
    let curr = this.head
    let i = 0
    while (curr) {
      if (curr.value === value) return i
      curr = curr.next
      i++
    }

    return -1
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      // let curr = this.head
      // while (curr.next) {
      //   curr = curr.next
      // }
      // curr.next = node
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  print() {
    let str = ""
    if (this.isEmpty()) return console.log("The list is empty")
    let curr = this.head
    while (curr) {
      // console.log(curr)
      str += `${curr.value} `
      curr = curr.next
    }
    console.log(str)
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  getTailHead() {
    return { head: this.head?.value, tail: this.tail?.value }
  }

  // addStack(val) {
  //   this.prepend(val)
  // }
  // removeStack() {
  //   this.remove(0)
  // }

  addQueue(value) {
    this.insert(value, 0)
  }

  removeQueue() {
    this.remove(this.size - 1)
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  prepend(value) {
    const node = new Node(value)

    if (!this.getSize()) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    this.size++
    return value
  }

  print() {
    let str = ""
    let curr = this.head
    for (let i = 0; i < this.size - 1; i++) {
      console.log({
        val: curr.value,
        prev: curr.prev?.value,
        next: curr.next?.value,
      })
      str += `${curr.value} `
      curr = curr.next
    }
    console.log({
      val: curr.value,
      prev: curr.prev?.value,
      next: curr.next?.value,
    })
    str += `${curr.value} `

    console.log(str)
  }

  getSize() {
    return this.size
  }

  getHeadTail() {
    console.log({ head: this.head, tail: this.tail })
  }
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.prepend(5)
doublyLinkedList.prepend(4)
doublyLinkedList.prepend(3)
doublyLinkedList.prepend(2)
doublyLinkedList.prepend(1)

doublyLinkedList.print()
