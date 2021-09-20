class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// FIFO - adding and removing from a queue is O(1)
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

    // dequeue - removing first item from the line (shift)
    dequeue() {
        // edge case: no item in list, return undefined
        if (this.length === 0) return undefined

        let temp = this.first
        // edge case: 1 node in list
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return temp
    }
}

let myQueue = new Queue(4)
myQueue