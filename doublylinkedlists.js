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

    // shift - remove node from start of list
    shift() {
        // if no items in list
        if (this.length === 0) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        // decrement length
        this.length--
        return temp
    }

    // Get - get a node at a particular index
    get(index) {
        // if index is outside of range, return undefined
        if (index < 0 || index >= this.length) return undefined
        // loop through list
        let temp = this.head
        if (index < this.length/2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length-1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    // Set - set the value of a node at a certain index
    set(index, value) {
        // call get method to get the value of a certain index position
        let temp = this.get(index)
        // if temp is returned true
        if (temp) {
            // set the temp.value = provided value
            temp.value = value
            return true
        }
        return false
    }

    // insert - insert new node of a particular value at a specific index
    insert(index, value) {
        // if null or empty then call unshift method)
        if (index === 0) return this.unshift(value)
        // if index is at the end, push
        if (index === this.length) return this.push(value)
        // if index falls outside of range 
        if (index < 0 || index > this.length) return false

        // create new node
        const newNode = new Node(value)
        // create variables for before and after
        const before = this.get(index-1)
        // O(1) instead of O(n) using this.get(index)
        const after = before.next

        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return true
    }

    // remove - remove a node at a specified index
    remove(index) {
        // remove first item, use shift
        if (index === 0) return this.shift()
        // if remove last item, use pop
        if (index === this.length-1) return this.pop()
        // anything less than 0 or greater than length, return false
        if (index < 0 || index >= this.length) return false

        // create variable to get index
        const temp = this.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null
        this.length--
        return temp
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7)
myDoublyLinkedList