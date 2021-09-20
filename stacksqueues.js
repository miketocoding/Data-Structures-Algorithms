class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// similar to linked list except we only need top
class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    // renaming unshift to push because this is a stack
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            // this.top as opposed to this.head
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
}


let myStack = new Stack(11)