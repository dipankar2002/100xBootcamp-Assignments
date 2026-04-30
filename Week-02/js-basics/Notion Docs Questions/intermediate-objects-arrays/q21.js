// Question:
// Merge two objects (no sum, override second).
// Given two objects, merge them into one object. If both objects have the same
// key, the value from the second object should be used.

// Input:
// first = { a: 10, b: 20 }
// second = { a: 5, c: 15 }

// Output:
// { a: 5, b: 20, c: 15 }

// Approach Hint:
// Copy values from both objects in order, letting later values replace earlier ones.

function solve(input) {
    // TODO: write your logic here
    return { ...input.first, ...input.second };
}

// Example Test Cases:
console.log(solve({
    first: { a: 10, b: 20 },
    second: { a: 5, c: 15 }
}));

