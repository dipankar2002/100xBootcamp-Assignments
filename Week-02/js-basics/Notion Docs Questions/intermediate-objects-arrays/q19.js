// Question:
// Sort array of objects by name then age.
// Given an array of people objects, sort by name first and by age second.

// Input:
// [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Alice", age: 22 }
// ]

// Output:
// [
//   { name: "Alice", age: 22 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 }
// ]

// Approach Hint:
// Compare names first. If names are equal, compare ages.

function solve(input) {
    // TODO: write your logic here
    return input.sort((a, b) => {
        if (a.name === b.name) {
            return a.age - b.age; // Sort by age if names are the same
        }
        return a.name.localeCompare(b.name); // Sort by name
    });
}

// Example Test Cases:
console.log(solve([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 22 }
]));

