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
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)

// console.log('myLinkedList:', myLinkedList)