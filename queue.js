class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// FIFO - O(1)
// Enqueue at last(tail) and dequeue at first(head)
class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    // push - enqueue at last
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
}

let myQueue = new Queue(4)
myQueue