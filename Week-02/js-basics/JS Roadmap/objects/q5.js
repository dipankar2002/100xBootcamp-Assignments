// Question:
// Create a function that merges two objects. If there are conflicts in values,
// allow for custom logic to determine the merged result.

// Input:
// object1 = { a: 1, b: 2 }
// object2 = { b: 3, c: 4 }
// customMerge = (key, val1, val2) => key === "b" ? val1 * val2 : val2

// Output:
// { a: 1, b: 6, c: 4 }

// Approach Hint:
// Merge keys from both objects and call customMerge only when both have the same key.

function solve(input) {
    // TODO: write your logic here
}

// Example Test Cases:
console.log(solve({
    object1: { a: 1, b: 2 },
    object2: { b: 3, c: 4 },
    customMerge: (key, val1, val2) => key === "b" ? val1 * val2 : val2
}));

