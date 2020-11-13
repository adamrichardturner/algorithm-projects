// Like the built in every method, which returns true if every element
// within a passed in array passes a set condition, but unpacked with
// a for loop. 

const every = (arr, test) => {
    // arr is the array argument. test is a predicate function defined below
    let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        // loop through each element in the arr, if each element passes the
        // test, push it to newArr
        if (test(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    // if newArr is the same length as original arr arg, every element passed
    // the test.
    if (newArr.length === arr.length) {
        return true;
    } else {
        return false;
    }
}

// predicate function to be passed as a param to every
const underTen = n => n < 10 ? true : false;

const test1 = [1, 5, 3, 8, 7];
const test2 = [4, 9, 12, 4, 7];

console.log(every(test1, underTen)); // returns true
console.log(every(test2, underTen)); // returns false