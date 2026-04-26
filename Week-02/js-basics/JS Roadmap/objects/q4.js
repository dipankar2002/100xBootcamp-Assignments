// Question:
// Write a function that validates an object against a provided schema. The
// schema should define the expected structure, data types, and optional/required
// fields.

// Input:
// object = { name: "John", age: 25, email: "john@example.com" }
// schema = { name: "string", age: "number", email: "string", address: "string?" }

// Output:
// true

// Approach Hint:
// Check required fields first, then compare each existing value's type.

function solve(input) {
    // TODO: write your logic here
}

// Example Test Cases:
console.log(solve({
    object: { name: "John", age: 25, email: "john@example.com" },
    schema: { name: "string", age: "number", email: "string", address: "string?" }
}));

