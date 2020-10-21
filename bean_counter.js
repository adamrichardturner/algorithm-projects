// Bean Counter
// You can get the Nth char from a string by writing "string"[N]
// string.length - 1 - returns the last char in the string. 

// Write a function countBs that takes a string as its only arg,
// and returns a number that indicates how many uppercase B chars
// there are in the string.

// Next, write a function called countChar that behaves like countBs
// except it takes a second arg, that indicates the char that is to
// be counted. Re-write countBs to make use of this new function.

const countBs = str => {
    return countChar(str, 'B');
}

const countChar = (str, charCount) => {
    let Bs = [];
    for(let l=0; l < str.length; l++) {
        if(str[l] === charCount) {
            Bs.push(str[l]);
        }
    }
    return Bs.length;
}

console.log(countBs('beelzeBuB'));