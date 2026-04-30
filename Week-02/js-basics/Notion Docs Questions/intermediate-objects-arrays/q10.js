// Question:
// Build index of ids grouped by category.
// Given an array of objects with ids and categories, return an object where
// each category stores an array of ids.

// Input:
// [
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" }
// ]

// Output:
// { fruit: [1, 3], veggie: [2] }

// Approach Hint:
// Group ids using category as the object key.

function solve(input) {
    // TODO: write your logic here
    return input.reduce((index, item) => {
        const { id, category } = item;
        if (!index[category]) {
            index[category] = [];
        }
        index[category].push(id);
        return index;
    }, {});
}

// Example Test Cases:
console.log(solve([
    { id: 1, category: "fruit" },
    { id: 2, category: "veggie" },
    { id: 3, category: "fruit" }
]));

