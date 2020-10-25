// BAKE A CAKE - An Imperative Approach
// Take the ingredients stored in an array and add them to the pan.
const ingredients = ['flour', 'eggs', 'chocolate', 'butter', 'marzipan', 'sugar', 'cream', 'ginger'];

let pan = [];
// Turn the ovenOn (true) when you have added the ingredients to the pan.
let ovenOn = false;

console.log('Ingredients added: ' + ingredients);

// Add ingredients to pan in Alphabetical order
pan[0] = ingredients[3];
pan[1] = ingredients[2];
pan[2] = ingredients[6];
pan[3] = ingredients[1];
pan[4] = ingredients[0];
pan[5] = ingredients[7];
pan[6] = ingredients[4];
pan[7] = ingredients[5];

console.log('Ingredients mixed: ' + pan);

// METAPHORICALLY WAIT 20 MINUTES (BAKING)
ovenOn = true;

console.log('Cooking...');
console.log('Cooking...');
console.log('DING!');

pan = []; // Clean the pan