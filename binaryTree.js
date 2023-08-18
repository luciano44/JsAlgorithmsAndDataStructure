class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      if (!root.right) {
        root.right = node
      } else {
        this.insertNode(root.right, node)
      }
    }
  }

  search(value, root = this.root) {
    if (this.isEmpty()) return false

    if (value === root.value) return true
    if (value < root.value) {
      if (root.left) {
        return this.search(value, root.left)
      } else {
        return false
      }
    } else {
      if (root.right) {
        return this.search(value, root.right)
      } else {
        return false
      }
    }
  }
}

const bst = new BinarySearchTree()

console.log("Is it empty?", bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.search(10))
