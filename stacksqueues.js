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
}