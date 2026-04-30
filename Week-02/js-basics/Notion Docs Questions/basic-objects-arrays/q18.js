// Question:
// Convert array of objects to lookup by id.
// Given an array of objects with id values, return an object where each id is
// a key and its full object is the value.

// Input:
// [{ id: 1, name: "A" }, { id: 2, name: "B" }]

// Output:
// { 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" } }

// Approach Hint:
// Use each object's id as the key in a new lookup object.

function solve(input) {
    // TODO: write your logic here
    return input.reduce((lookup, item) => {
        lookup[item.id] = item;
        return lookup;
    }, {});
}

// Example Test Cases:
console.log(solve([{ id: 1, name: "A" }, { id: 2, name: "B" }]));

