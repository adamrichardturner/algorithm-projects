// Write a loop that makes seven calls to console.log
// to output a triangle shape. You can use .length

// triangle() takes a number (the length of the base of the output triangle)
// it checks if baseLength is a number, if so, it loops, ending the loop
// when the base length is reached. On each iteration of the loop it concatenates
// bit to itself (the symbol #). Produces is an incrementally growing triangle 
let triangle = (baseLength) => {
    let bit = '#';
    if(typeof baseLength === 'number') {
        while (bit.length <= baseLength) {
            console.log(bit);
            bit = bit + '#';
        }
    } else {
        console.log('You need to input the base as a number.')
    }
}

triangle(10);