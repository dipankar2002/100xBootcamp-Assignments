// Question:
// Create a function to perform a deep clone of an object, handling nested
// objects and arrays.

// Input:
// { user: { name: "John", hobbies: ["reading", "coding"] } }

// Output:
// A new deeply cloned object with the same values.

// Approach Hint:
// Copy nested objects and arrays without keeping the same references.

function solve(input) {
    // TODO: write your logic here
    if (input === null || typeof input !== "object") {
        return input;
    }

    if (Array.isArray(input)) {
        return input.map((item) => solve(item));
    }

    const cloned = {};

    for (const key in input) {
        cloned[key] = solve(input[key]);
    }

    return cloned;
}

// Example Test Cases:
console.log(solve({ user: { name: "John", hobbies: ["reading", "coding"] } }));

