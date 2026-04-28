// Question:
// Write a JavaScript program to demonstrate type operators on different data
// types.

// Input:
// ["hello", 10, true, {}, []]

// Output:
// Type information for each value.

// Approach Hint:
// Use JavaScript type-related operators to inspect values.

function solve(input) {
    // TODO: write your logic here
    return input.map(value => {
        return {
            value: value,
            type: typeof value,
            isArray: Array.isArray(value),
            isObject: typeof value === 'object' && !Array.isArray(value) && value !== null
        };
    });
}

// Example Test Cases:
console.log(solve(["hello", 10, true, {}, []]));

