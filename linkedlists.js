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
        // Object(1) because we only need to add the inital node and not go through entire list
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
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)

// console.log('myLinkedList:', myLinkedList)