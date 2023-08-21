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

  preOrder(root) {
    if (this.isEmpty()) return "THE TREE IS EMPTY!"
    if (root) {
      console.log("preOrder", root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if (this.isEmpty()) return "THE TREE IS EMPTY!"
    if (root) {
      this.inOrder(root.left)
      console.log("inOrder", root.value)
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if (this.isEmpty()) return "THE TREE IS EMPTY!"
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log("postOrder", root.value)
    }
  }

  breadthFirstSearch() {
    const queue = [...arguments]
    if (this.isEmpty() || queue.length === 0) return

    console.log("BFS", queue[0].value)
    if (queue[0].left) queue.push(queue[0].left)
    if (queue[0].right) queue.push(queue[0].right)
    queue.shift()
    this.breadthFirstSearch(...queue)
  }

  minMax() {
    if (this.isEmpty()) return

    let min = this.root
    let max = this.root

    while (min.left || max.right) {
      min = min.left || min
      max = max.right || max
    }

    console.log({ min: min.value, max: max.value })
  }

  min() {
    let min = this.root

    while (min.left) {
      min = min.left
    }

    console.log(min)
  }

  max() {
    let max = this.root

    while (max.right) {
      max = max.right
    }

    console.log(max)
  }

  remove(value) {
    if (this.isEmpty()) return

    let node = this.root
    let deletedNode
    let childNodesToReinsert = []

    if (node.value === value) {
      if (node.left) {
        this.root = node.left
        if (node.right) this.insertNode(this.root, node.right)
        return null
      } else {
        if (node.right) {
          this.root = node.right
          if (node.left) this.insertNode(this.root, node.left)
          return null
        }
      }

      return (this.root = null)
    }

    while (node && !deletedNode) {
      if (node.left?.value === value) {
        deletedNode = node.left
        node.left = undefined
        node = null
      }
      if (!deletedNode && node.right?.value === value) {
        deletedNode = node.right
        node.right = undefined
        node = null
      }
      if (!deletedNode && value < node.value) {
        node = node?.left
      } else {
        node = node?.right
      }
    }

    if (deletedNode?.left) childNodesToReinsert.push(deletedNode.left)
    if (deletedNode?.right) childNodesToReinsert.push(deletedNode.right)

    if (childNodesToReinsert.length > 0) {
      childNodesToReinsert.forEach((node) => {
        this.insertNode(this.root, node)
      })
    }
    // console.log("preOrder", root.value)
    // this.preOrder(root.left)
    // this.preOrder(root.right)

    // return deletedNode
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

// console.log(bst.remove(10))
// console.log(bst.remove(15))
// bst.remove(10)

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
