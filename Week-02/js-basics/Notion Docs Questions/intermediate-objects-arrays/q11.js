// Question:
// Remove deeply nested key from object.
// Given a nested object and a key name, remove that key wherever it appears
// inside the object.

// Input:
// object = { a: { b: { c: 1, d: 2 } } }
// removeKey = "c"

// Output:
// { a: { b: { d: 2 } } }

// Approach Hint:
// Think recursively and check nested objects.

function solve(input) {
    // TODO: write your logic here
}

// Example Test Cases:
console.log(solve({
    object: { a: { b: { c: 1, d: 2 } } },
    removeKey: "c"
}));

