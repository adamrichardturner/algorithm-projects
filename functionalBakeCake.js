// BAKE A CAKE - A FUNCTIONAL APPROACH

// Take the ingredients stored in an array and add them to the pan.
const ingredients = ['flour', 'eggs', 'chocolate', 'butter', 'marzipan', 'sugar', 'cream', 'ginger'];

let pan = [];
let oven = false;

function addToPan(pan, ingredients) {
  // Take an array of ingredients and add them to the pan
  // The pan will be cleaned at the end of each cooking cycle.
  for (let i = 0; i < ingredients.length; i++) {
    pan.push(ingredients[i]);
  }
  return pan;
}

function mix(pan) {
    // Mix the ingredients by placing them in alphebetical order
    return pan.sort();
}

function ovenSwitch() {
  // Oven is on when it is true
  if(oven) {
    return false;
  } else {
    return true;
  }
}

function clean(pan) {
    return pan = [];
}

function bake() {
    // HIGHER ORDER FUNCTION, CALLS OTHER FUNCTIONS
    addToPan(pan, ingredients);
    console.log('Ingredients added: ' + pan);
    mix(pan);
    console.log('Ingredients mixed: ' + pan);
    // METAPHORICALLY WAIT 20 MINUTES (BAKING)
    ovenSwitch();
    console.log('Cooking...');
    console.log('Cooking...');
    console.log('DING!');
    ovenSwitch();
    // CLEAN PAN
    pan = clean(pan);
}

bake();
