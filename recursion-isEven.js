// Define a recursive function isEven that accepts
// a single parameter (a positive, whole number) and returns
// a boolean (true for even). 

// Define it using the following rules: a. zero is even, b. one is odd
// c. For any other number, N, its evenness is the same as N-2.

const isEven = num => {
    if(typeof num === 'number') {
        if(num === 0) {
            return true;
        } else if(num === 1) {
            return false;
        } else if (num > 1) {
            return isEven(num - 2);
        } else if (num < 0) {
            return 'Not a positive whole number';
        } else {
            return 'Not a number';
        }
    }
}

console.log(isEven(50)); // false
console.log(isEven(-1)); // 'Not a positive whole number'