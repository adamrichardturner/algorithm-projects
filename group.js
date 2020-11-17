/*
Write a class group that, like Set, has add, delete and has methods.
Its constructor creates an empty group, add adds a value to the group
(but only if it isn't already a member), delete removes na argument from
the group (if it was a member) and has returns a Boolean value indicating
whether its argument is a member of the group.  From (static) takes
an iterable obj as arg and creates a group that contains all the values
produced by iterating over it
*/

class Group {
    constructor(group) {
        this._group = group;
    }

    add(val) {
        // If the val is not in the group, add it to end of the group.
        if (!this._group.includes(val)) {
            this._group.push(val);
        }
    }

    delete(val) {
        // If the value is a member of the group, splice it out.
        if (this._group.includes(val)) {
            let x = this._group.indexOf(val);
            this._group.splice(x, 1);
        }
    }

    has(val) {
        // If the value exists, return true.
        if (this._group.includes(val)) {
            return true;
        }
    }

    static from(obj) {
        // Takes an iterable object and creates a group that contains all the
        // values produced by iterating over it. 
        let arr = [];
        for (let i of obj) {
            arr.push(obj[i]);
        }
        return arr;
    }
}

let dogsObj = {
    frido: {
        age: 12,
        breed: 'bulldog'
    },

    dojo: {
        age: 11,
        breed: 'terrier'
    }
};

let canines = ['Fluffy', 'Dodo', 'Chimpy', 'Plaid'];

let dogs = new Group(canines);

console.log(dogs.has('Dodo')); // True

dogs.add('Babe');

dogs.delete('Dodo');

console.log(dogs); // [ 'Fluffy', 'Chimpy', 'Plaid', 'Babe' ] }

console.log(Group.from(dogsObj));