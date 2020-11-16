class Vec {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    plus(newX, newY) {
        let arr = [];
        arr.push(this._x + newX);
        arr.push(this._y + newY);
        return arr;
    }

    minus(newX, newY) {
        let arr = [];
        arr.push(this._x - newX);
        arr.push(this._y - newY);
        return arr;
    }

    get length() {
        // Resolved as squareRoot of (x^2 + y^2) 
        let x = this._x;
        let y = this._y;
        console.log(Math.sqrt(x ** 2 + y ** 2));
        return Math.sqrt(x ** 2 + y ** 2);
    }
}

let newVec = new Vec(5, 4); // Creates a new object instance from the Vec class. 
newVec.length; // Returns the length of the vector (the distance from 0,0)
console.log(newVec.plus(10, 12)); // Returns the original vector + a new vector
console.log(newVec.minus(10, 13)); // Returns the original vector - a new vector