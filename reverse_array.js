/*
Arrays have a reverse method which inverts the order
in which its elements appear. You may not use this method
for this exercise.

1. Create a function reverseArray that takes array as an 
argument and produces a new array that has the same elements
inverse order. 

2. Create a function that does what reverse method does 
and modifies the array given as an argument.
*/

const reverseArray = arr => {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const reverseModification = arr => {
    for(let i = arr.length-1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    arr.splice(0, (arr.length) / 2);
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6]; 

console.log(reverseArray(arr)); // Prints: [ 6, 5, 4, 3, 2, 1 ]

console.log(reverseModification(arr)); // Prints [ 6, 5, 4, 3, 2, 1 ]