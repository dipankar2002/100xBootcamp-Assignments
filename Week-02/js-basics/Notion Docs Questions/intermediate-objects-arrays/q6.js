// Question:
// Remove duplicate objects by id.
// Given an array of objects, return a new array with duplicate ids removed.

// Input:
// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]

// Output:
// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]

// Approach Hint:
// Track ids you have already seen.

function solve(input) {
    // TODO: write your logic here
    return input.filter((obj, index, self) =>
        index === self.findIndex((o) => o.id === obj.id)
    );
}

// Example Test Cases:
console.log(solve([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
]));

