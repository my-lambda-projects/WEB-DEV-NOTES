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
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val); // D
        let oldTail = this.tail; // C
        if(!this.head){
            this.head = newNode;
        } else {
            oldTail.next = newNode;
        }
        this.tail = newNode;
        this.length++
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        // if (!this.head) return undefined;
        // let current = this.head;
        // let newTail = current;
        // while (current.next) {
        //     newTail = current;
        //     current = current.next;
        // }
        // this.tail = newTail;
        // this.tail.next = null;
        // this.length--;
        // if (this.length === 0) {
        //     this.head = null;
        //     this.tail = null;
        // }
        // return current;

        let newTail = this.tail.prev; // B
        this.tail = newTail; // B
        newTail.next = null; // B.next = null
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head) return undefined;
        let currentHead = this.head; // A
        this.head = currentHead.next; // B
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // TODO: Implement the contains method here
    contains(target) { //B
        let node = this.head; // A
        while(node){
            if(node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    // index: 2
    // counter: 0 => 1 => 2
    // current: A => B => C
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index)
        if(node){
            node.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        // check edge cases
        // create newNode with val // D

        // find node at index - 1, store as prevNode // B
        // store prevNode next as oldNext //C
        // set prevNode next to newNode // B.next = D
        // set newNode next to oldNext // D.next = C
        // increment length
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.addToHead(val);
        if(index === this.length) return !!this.addToTail(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let oldNext = prevNode.next;
        prevNode.next = newNode;
        newNode.next = oldNext;
        this.length++;
        return true;




    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.removeHead(val);
        if(index === this.length) return !!this.removeTail(val);
        let prevNode = this.get(index - 1); // get previous node
        let nodeToRemove = prevNode.next; //node we want to remove
        prevNode.next = nodeToRemove.next; // set prev ndoe's next value to removed node's next
        this.length--;
        return nodeToRemove;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
