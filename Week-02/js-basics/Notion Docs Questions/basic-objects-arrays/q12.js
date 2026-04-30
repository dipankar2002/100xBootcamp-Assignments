// Question:
// Sort object entries by values in ascending order.
// Given an object with numeric values, return its entries sorted by value from
// smallest to largest.

// Input:
// { a: 3, b: 1, c: 2 }

// Output:
// [["b", 1], ["c", 2], ["a", 3]]

// Approach Hint:
// Convert the object into entries, then sort by the second item.

function solve(input) {
    // TODO: write your logic here
    return Object.entries(input).sort(([, valueA], [, valueB]) => valueA - valueB);
}

// Example Test Cases:
console.log(solve({ a: 3, b: 1, c: 2 }));

