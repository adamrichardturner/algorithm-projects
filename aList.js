/*
Objects as generic blobs of values can be used to build all 
sorts of data structures. A common data structure is a list
A list is a nested set of objects, with the first object
holding a reference to the second, the second to the third
and so on.
*/

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

// Write a function arrayToList that builds up a list structure
// like the one shown when given [1, 2, 3] as argument. Also write
// listToArray function that produces an array from a list. 

// Then add a helper function, prepend, which takes a list and a number
// and returns the element at the given position in the list (zero indexed)
// or undefined when no such element exists. 
const testArr = [1, 2, 3];
const arrayToList = arr => {
    for(let i=0; i <= arr.length; i++) {
        
    }
}

console.log(arrayToList(testArr));

