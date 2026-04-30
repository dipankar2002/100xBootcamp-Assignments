// Question:
// Find longest string among object values.
// Given an object with string values, return the longest string.

// Input:
// { a: "apple", b: "banana", c: "kiwi" }

// Output:
// "banana"

// Approach Hint:
// Compare string lengths while looping through the values.

function solve(input) {
    // TODO: write your logic here
    return Object.values(input).reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// Example Test Cases:
console.log(solve({ a: "apple", b: "banana", c: "kiwi" }));

