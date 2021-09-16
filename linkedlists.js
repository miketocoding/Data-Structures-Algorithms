class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
//     return the entire linkedList
//     return the particular linkedList named myLinkedList
        return this
    }

    pop() {
        // O(n) operation. Must iterate through 
        // edge case if it's an empty list
        if (!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    // unshift - adding a new node to the head
    unshift(value) {
        // O(1) because we only need to add the inital node and not go through entire list
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    // shift - removing the head node
    shift() {
        // if list is empty then return undefined
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }

    // Get - get node at a particular index
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    // Set - set the value at a certain index
    set(index, value) {
        // use get() and pass it the index
        let temp = this.get(index)
        // is temp undefined or is it pointing to a node
        if (temp) {
            // temp.value is set as the value we input
            temp.value = value
            // need a return statement to stop the if statement
            return true
        }
        // else return false
        return false
    }
    
    // insert - inserts a value at a particular index
    insert(index, value) {
        // if we put value at beginning of linked list
        if (index === 0) return this.unshift(value)
        // if we put value at end of linked list
        if (index === this.length) return this.push(value)
        // if the index falls outside the linked list
        if (index < 0 || index > length) return false
        const newNode = new Node(value)
        // want the node prior to the insertion point
        let temp = this.get(index-1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)

// console.log('myLinkedList:', myLinkedList)