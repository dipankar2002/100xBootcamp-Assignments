// Question:
// Swap keys and values of object.
// Given an object, return a new object where old values become keys and old
// keys become values.

// Input:
// { a: "x", b: "y", c: "z" }

// Output:
// { x: "a", y: "b", z: "c" }

// Approach Hint:
// Loop through key-value pairs and build a new object.

function solve(input) {
    // TODO: write your logic here
    return Object.fromEntries(
        Object.entries(input).map(([key, value]) => [value, key])
    );
}

// Example Test Cases:
console.log(solve({ a: "x", b: "y", c: "z" }));

