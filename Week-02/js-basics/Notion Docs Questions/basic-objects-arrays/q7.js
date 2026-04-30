// Question:
// Filter object by values greater than 50.
// Given an object with numeric values, return a new object containing only
// entries whose values are greater than 50.

// Input:
// { a: 20, b: 60, c: 40, d: 90 }

// Output:
// { b: 60, d: 90 }

// Approach Hint:
// Check each key-value pair and copy only the matching entries.

function solve(input) {
    // TODO: write your logic here
    return Object.fromEntries(
        Object.entries(input).filter(([key, value]) => value > 50)
    );
}

// Example Test Cases:
console.log(solve({ a: 20, b: 60, c: 40, d: 90 }));

