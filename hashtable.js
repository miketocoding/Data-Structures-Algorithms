class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    // tells other devs, this is a method only called by other methods
    // don't call this directly
    // pass it a key (from key value pair). Example 'paint'
    _hash(key) {
        // declare variable and set it to 0
        let hash = 0
        // key is 'paint' length is 5, loop runs 5 times
        for (let i = 0; i < key.length; i++) {
            // every letter has a particular numerical value (key.charCodeAt(i))
            // everytime loop through multiply by prime number (makes more random)
            // modulo operator gives remainer when divide
            // dataMap is address space so remainder will always be 0-6
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        // always be 0-6 if address space is 7
        return hash
    }

    // set method - set an item
    set(key, value) {
        // 1. find index of where to store key value pair
        // create a variable index to get a index for a key (run through hash function)
        let index = this._hash(key)
        // 2. If this is completely empty, then we can create empty array
        if (!this.dataMap[index]) {
            // build empty array to push key value pairs into
            this.dataMap[index] = []
        }
        // 3. Now push key value pairs
        this.dataMap[index].push([key, value])
        return this
    }
}

let myHashTable = new HashTable()
myHashTable