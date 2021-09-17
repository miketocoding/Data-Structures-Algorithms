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

    // Pop - remove last node on doubly linked list
    pop() {
        // if null return undefined
        if (this.length === 0) return undefined
        // create a temp variable to equal to this.tail so we can pop it
        let temp = this.tail
        // if statement for a signle node in list
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return this

        // instead of below, we can make it easier to read with the code of above
        // // if null return undefined
        // if (this.length === 0) return undefined
        // // create a temp variable to represent this.tail
        // let temp = this.tail
        // this.tail = this.tail.prev
        // this.tail.next = null
        // temp.prev = null
        // this.length--
        // // if length is 0 set head and tail to null
        // if (this.length === 0) {
        //     this.head = null
        //     this.tail = null
        // }
        // return temp
    }

    // unshift - add to the start of the list
    unshift(value) {
        // create new node
        const newNode = new Node(value)
        // if empty then set head tail to new node
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        // increment the length
        this.length++
        return this
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7)
myDoublyLinkedList