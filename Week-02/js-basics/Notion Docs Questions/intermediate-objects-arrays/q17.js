// Question:
// Nested object destructuring.
// Given a nested user object, return the user's name and age.

// Input:
// { user: { profile: { name: "Alice", age: 25 } } }

// Output:
// "Alice 25"

// Approach Hint:
// Access values from the nested profile object.

function solve(input) {
    // TODO: write your logic here
    return `${input.user.profile.name} ${input.user.profile.age}`;
}

// Example Test Cases:
console.log(solve({ user: { profile: { name: "Alice", age: 25 } } }));

