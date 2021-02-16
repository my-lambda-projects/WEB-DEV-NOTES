// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.front = null
    this.back = null
    this.length = 0
  }

  enqueue (value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.front = newNode
    } else {
      this.back.next = newNode
    }
    this.back = newNode

    return ++this.length
  }

  dequeue () {
    if (this.length === 0) return null
    const removedNode = this.front

    if (this.length === 1) {
      this.front = null
      this.back = null
    } else {
      this.front = this.front.next
    }
    this.length--
    return removedNode.value
  }

  size () {
    return this.length
  }
}

exports.Node = Node
exports.Queue = Queue
