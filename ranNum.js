// Write a function that expects a single param of a num (n) when called
// the function should return an array of n random numbers, each between 1
// and 100

const ranArr = n => {
    // ranArr takes n, the number of items in the array that will be random
    let arr = [];
    // arr is declared which we will push the random numbers to
    for (let i = 1; i <= n; i++) {
        // starting from 1 in the for loop and break condition is the <= 
        // the num of items we want in the array (there will be n iterations)
        arr.push(Math.floor(Math.random(1) * 100));
        // as above, push (add to from the end of the arr), to arr random nums
        // between 1 and 100 on each iteration of i of the loop
    }
    // reeturn the value now stored in the arr
    return arr;
}

console.log(ranArr(10));