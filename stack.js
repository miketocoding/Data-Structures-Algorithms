class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// LIFO - Last in first out
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

    // pop method
    pop() {
        // if empty return undefined
        // if (!this.top) return undefined
        if (this.length === 0) return undefined

        let temp = this.top
        // set top to equal the next node
        this.top = this.top.next
        // break temp off from rest of the stack
        temp.next = null
        // decrement the length
        this.length--
        // return what was popped
        return temp
    }
}


let myStack = new Stack(11)
myStack