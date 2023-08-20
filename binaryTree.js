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

  insert(value) {
    const node = new Node(value)
    if (this.isEmpty()) return (this.root = node)
    return this.insertNode(this.root, node)
  }

  insertNode(root, node) {
    // if (node.value === root.value)
    //   return console.log(root.value, "<- VALUE ALREADY EXISTS")
    if (node.value < root.value) {
      if (!root.left) {
        return (root.left = node)
      } else {
        return this.insertNode(root.left, node)
      }
    } else {
      if (!root.right) {
        return (root.right = node)
      } else {
        return this.insertNode(root.right, node)
      }
    }
  }

  search(value, root = this.root) {
    if (this.isEmpty()) return null
    if (value === root.value) return root
    if (value < root.value) {
      if (!root.left) return null
      return this.search(value, root.left)
    } else {
      if (!root.right) return null
      return this.search(value, root.right)
    }
  }

  isEmpty() {
    return this.root === null
  }

  preOrderX(root) {
    if (root) {
      console.log("preOrder", root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  preOrder(root) {
    if (root) {
      console.log("preOrder", root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log("inOrder", root.value)
      this.inOrder(root.right)
    }
  }

  breadthFirstSearch() {
    const queue = [...arguments]
    if (!this.root || queue.length === 0) return

    console.log("BFS", queue[0].value)
    if (queue[0].left) queue.push(queue[0].left)
    if (queue[0].right) queue.push(queue[0].right)
    queue.shift()
    this.breadthFirstSearch(...queue)
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log("postOrder", root.value)
    }
  }
}

const bst = new BinarySearchTree()

// console.log("Is it empty?", bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(17)
bst.insert(13)

bst.breadthFirstSearch(bst.root)
