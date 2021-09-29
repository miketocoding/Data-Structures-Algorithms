class Node {
    constructor(value) {
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class BST {
    constructor() {
        // create framework for binary search tree and don't need to add new node at time tree created
        this.root = null
    }

    // insert item
    insert(value) {
        let newNode = new Node(value)
        // if empty tree, set root = newNode
        if (this.root === null) {
            this.root = newNode
            // need return so we stop running code
            return this
        }
        // set variable
        let temp = this.root
        // keep running unless we hit a return statement
        while (true) {
            // if we try to insert a node with the same value as another in the tree
            if (newNode.value === temp.value) return undefined
            // if newNode.value is less than temp.value
            if (newNode.value < temp.value) {
                // if temp.left is null
                if (temp.left === null) {
                    // insert newNode as temp.left
                    temp.left = newNode
                    // exit
                    return this
                }
                // else temp now equals temp.left
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
    // contains method
    contains(value) {
        // if empty tree, return false
        if (this.root === null) return false
        // create variable to compare value to
        let temp = this.root
        // while temp is not equal to null
        while (temp) {
            // if value is less than temp.value
            if (value < temp.value) {
                // set temp to temp.left
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                // if it's equal, return true
                return true
            }
        }
        // return false when temp equals to null
        return false
    }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)