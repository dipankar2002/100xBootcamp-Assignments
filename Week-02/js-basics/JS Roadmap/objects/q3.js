// Question:
// Create a function that transforms an object by renaming its keys based on a
// provided mapping. The function should handle nested objects.

// Input:
// object = { firstName: "John", address: { city: "New York" } }
// mapping = { firstName: "name", address: { city: "location.city" } }

// Output:
// { name: "John", location: { city: "New York" } }

// Approach Hint:
// Read the mapping and place values into their new key paths.

function solve(input) {
    // TODO: write your logic here
}

// Example Test Cases:
console.log(solve({
    object: { firstName: "John", address: { city: "New York" } },
    mapping: { firstName: "name", address: { city: "location.city" } }
}));

