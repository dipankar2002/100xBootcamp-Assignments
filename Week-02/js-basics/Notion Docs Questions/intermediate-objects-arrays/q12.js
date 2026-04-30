// Question:
// Check if two objects are deeply equal.
// Given two nested objects, return true if both have the same structure and
// values.

// Input:
// first = { a: { x: 1, y: 2 } }
// second = { a: { x: 1, y: 2 } }

// Output:
// true

// Approach Hint:
// Compare keys and values at every nested level.

function solve(input) {
    // TODO: write your logic here
    const { first, second } = input;

    function deepEqual(obj1, obj2) {
        if (obj1 === obj2) {
            return true;
        }

        if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
            return false;
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    return deepEqual(first, second);
}

// Example Test Cases:
console.log(solve({
    first: { a: { x: 1, y: 2 } },
    second: { a: { x: 1, y: 2 } }
}));

