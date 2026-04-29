// Question:
// Write a function that takes two objects and returns an object containing the
// common key-value pairs.

// Input:
// first = { a: 1, b: 2, c: 3 }
// second = { a: 1, b: 5, c: 3 }

// Output:
// { a: 1, c: 3 }

// Approach Hint:
// Compare keys that exist in both objects and keep matching values.

function solve(input) {
    // TODO: write your logic here
    const { first, second } = input;
    const common = {};

    for (const key in first) {
        if (Object.prototype.hasOwnProperty.call(second, key) && first[key] === second[key]) {
            common[key] = first[key];
        }
    }

    return common;
}

// Example Test Cases:
console.log(solve({
    first: { a: 1, b: 2, c: 3 },
    second: { a: 1, b: 5, c: 3 }
}));

