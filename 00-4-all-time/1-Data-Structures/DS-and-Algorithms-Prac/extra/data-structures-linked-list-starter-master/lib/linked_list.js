// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}
// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // TODO: Implement the addToTail method here
  addToTail (val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.length++
    return this
  }

  // TODO: Implement the removeTail method here
  removeTail () {
    const removedTail = this.tail
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return removedTail
    }

    let node = this.head
    let previous
    while (node.next !== null) {
      previous = node
      node = node.next
    }
    this.tail = previous
    this.tail.next = null
    this.length--
    return removedTail
  }

  // TODO: Implement the addToHead method here
  addToHead (val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }
    this.head = newNode
    this.length++
    return this
  }

  // TODO: Implement the removeHead method here
  removeHead () {
    if (this.length === 0) return undefined
    const removedHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return removedHead
    }
    this.head = this.head.next
    this.length--
    return removedHead
  }

  // TODO: Implement the contains method here
  contains (target) {
    let node = this.head

    while (node.value !== target) {
      if (node.next === null) {
        return false
      }
      node = node.next
    }
    return true
  }

  // TODO: Implement the get method here
  get (index) {
    if (index < 0) return null

    let node = this.head
    let counter = 0
    while (counter < index) {
      if (node.next === null) {
        return null
      }
      node = node.next
      counter++
    }
    return node
  }

  // TODO: Implement the set method here
  set (index, val) {
    if (index < 0) return false

    let node = this.head
    let counter = 0
    while (counter < index) {
      if (node.next === null) {
        return false
      }
      node = node.next
      counter++
    }
    node.value = val
    return true
  }

  // TODO: Implement the insert method here
  insert (index, val) {
    if (index > this.length || index < 0) return false
    if (index === 0) {
      this.addToHead(val)
      return false
    }
    if (index === this.length) {
      this.this.addToTail(val)
      return false
    }

    const newNode = new Node(val)
    this.length++

    let node = this.head
    let previous
    for (let i = 0; i < index; i++) {
      previous = node
      node = node.next
    }
    newNode.next = node
    previous.next = newNode

    return true
  }

  // TODO: Implement the remove method here
  remove (index) {
    if (index > this.length || index < 0) {
      return undefined
    }

    if (index === 0) return this.removeHead()
    if (index === this.length - 1) return this.removeTail()

    let node = this.head
    let previous
    for (let i = 0; i < index; i++) {
      previous = node
      node = node.next
    }

    previous.next = node.next
    this.length--
    return node
  }

  // TODO: Implement the size method here
  size () {
    return this.length
  }
}

exports.Node = Node
exports.LinkedList = LinkedList
