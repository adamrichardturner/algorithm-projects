const random = Math.floor(Math.random() * 3);

console.log(random);
console.log(random); // This works

const getRandom = () => {
    const random = Math.floor(Math.random() * 3);
    return random;
}

console.log(getRandom()); // this also works