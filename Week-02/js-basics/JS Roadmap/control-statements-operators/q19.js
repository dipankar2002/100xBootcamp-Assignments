// Question:
// Write a JavaScript program to demonstrate the use of the typeof operator on
// different variables.

// Input:
// ["hello", 42, true, undefined]

// Output:
// Type of each variable.

// Approach Hint:
// Apply typeof to each value.

function solve(input) {
    // TODO: write your logic here
    return input.map(value => typeof value);
}

// Example Test Cases:
console.log(solve(["hello", 42, true, undefined]));

