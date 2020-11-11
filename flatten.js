// Use the reduce method in combination with the concat method
// to flatten an array of arrays into a single array that has all
// the elements of the original arrays

let arr = [
    [1, 2, 3],
    ['cats', 'dogs', 'pigeons'],
    [null, 200, 500]
];

const flatten = arr => {
    const arg = (x, y) => x.concat(y);
    return arr.reduce(arg);
}

flatten(arr);