// Question:
// Capitalize string values inside object.
// Given an object with string values, return a new object where each string
// value starts with a capital letter.

// Input:
// { name: "alice", city: "delhi" }

// Output:
// { name: "Alice", city: "Delhi" }

// Approach Hint:
// For each value, uppercase the first character and keep the rest.

function solve(input) {
    // TODO: write your logic here
    return Object.fromEntries(
        Object.entries(input).map(([key, value]) => {
            if (typeof value === "string") {
                return [key, value.charAt(0).toUpperCase() + value.slice(1)];
            }
            return [key, value];
        })
    );
}

// Example Test Cases:
console.log(solve({ name: "alice", city: "delhi" }));

