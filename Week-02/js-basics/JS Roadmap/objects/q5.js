// Question:
// Create a function that merges two objects. If there are conflicts in values,
// allow for custom logic to determine the merged result.

// Input:
// object1 = { a: 1, b: 2 }
// object2 = { b: 3, c: 4 }
// customMerge = (key, val1, val2) => key === "b" ? val1 * val2 : val2

// Output:
// { a: 1, b: 6, c: 4 }

// Approach Hint:
// Merge keys from both objects and call customMerge only when both have the same key.

function solve(input) {
    // TODO: write your logic here
    const { object1, object2, customMerge } = input;
    const merged = {};

    for (const key in object1) {
        if (Object.prototype.hasOwnProperty.call(object2, key)) {
            merged[key] = customMerge(key, object1[key], object2[key]);
        } else {
            merged[key] = object1[key];
        }
    }

    for (const key in object2) {
        if (!Object.prototype.hasOwnProperty.call(object1, key)) {
            merged[key] = object2[key];
        }
    }

    return merged;
}

// Example Test Cases:
console.log(solve({
    object1: { a: 1, b: 2 },
    object2: { b: 3, c: 4 },
    customMerge: (key, val1, val2) => key === "b" ? val1 * val2 : val2
}));

