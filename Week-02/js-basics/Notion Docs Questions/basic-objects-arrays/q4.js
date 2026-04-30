// Question:
// Find the largest value key.
// Given an object with numeric values, return the key that has the largest
// value.

// Input:
// { a: 10, b: 50, c: 20 }

// Output:
// "b"

// Approach Hint:
// Track the current largest value and its key while iterating.

function solve(input) {
    // TODO: write your logic here
    return Object.keys(input).reduce((largestKey, currentKey) => {
        return input[currentKey] > input[largestKey] ? currentKey : largestKey;
    }, Object.keys(input)[0]);
}

// Example Test Cases:
console.log(solve({ a: 10, b: 50, c: 20 }));

