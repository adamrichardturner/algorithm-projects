// Write a program that uses console.log to print
// all the numbers from 1 to 100. 
// For numbers divisible by 3, print 'Fizz' instead
// of the number. 
// For numbers divisible by 5 (and not 3), print 'Buzz' 
// instead. For numbers divisible by both, print FizzBuzz.

const fizzBuzz = (numLimit) => {
    let num = 1;
    if(typeof numLimit != 'number') {
        console.log('Enter a number')
    } else {
        while(num <= numLimit) {
            if(num % 3 === 0 && num % 5 === 0) {
                console.log('FizzBuzz');
            } else if (num % 3 === 0) {
                console.log('Fizz');
            } else if (num % 5 === 0) {
                console.log('Buzz');
            } else {
                console.log(num);
            }
            num++;
        }
    }
}

fizzBuzz(100);