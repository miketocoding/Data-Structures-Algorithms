// create a class node and constructor
class Node {
    constructor(value) {
        // value and next same as single linked list
        this.value = value
        this.next = null
        // prev added for doubly linked lists
        this.prev = null
    }
}

// build a linked list class
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // Push - Add new node to end of list
    push(value) {
        const newNode = new Node(value)
        // if have an empty list
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode            
        }
        this.length++
        return this
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7)
myDoublyLinkedList