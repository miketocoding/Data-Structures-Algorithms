// see if two arrays have any matching values
function itemInCommon(arr1, arr2) {
    // using nested for loops - O(n**2)
    // loop through first array
    // for (let i = 0; i < arr1.length; i++) {
    //     // loop through second array to see if match first array
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (arr1[i] === arr2[j]) return true
    //     }
    // }
    // return false

    // using HashTables
    // create an empty object
    let obj = {}
    // for loop to add value to empty object
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true
    }
    // second for loop (not nested) to check if any keys match
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) return true
    }
    return false
}

// to get value from key
// object.key or object[key] = value