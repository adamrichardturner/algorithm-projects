// range: Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up
// to and including end.

// sumOfArray: write a sum function that takes an array of numbers
// and returns the sum of these numbers. Run the example program (1, 10)
// and see whether it does indeed return 55.

const range = (start, end) => {
    let arr = [];
    for(let i=start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

const sumOfArray = arr => {
    let r = 0;
    for(let i=0; i < arr.length; i++) {
        r = r + arr[i];
    }
    return r;
}

console.log(sumOfArray(range(1, 10)));
// Logs 55