// Question:
// Find common keys between two objects.
// Given two objects, return an array of keys that exist in both objects.

// Input:
// first = { a: 1, b: 2, c: 3 }
// second = { b: 4, c: 5, d: 6 }

// Output:
// ["b", "c"]

// Approach Hint:
// Compare the keys of one object with the keys of the other.

function solve(input) {
    // TODO: write your logic here
    return Object.keys(input.first).filter(key => key in input.second);
}

// Example Test Cases:
console.log(solve({
    first: { a: 1, b: 2, c: 3 },
    second: { b: 4, c: 5, d: 6 }
}));

