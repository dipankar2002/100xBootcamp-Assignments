// Question:
// Deep merge two nested objects.
// Given two nested objects, merge them so nested keys are combined and values
// from the second object override matching values from the first.

// Input:
// first = { a: { x: 1, y: 2 } }
// second = { a: { y: 3, z: 4 } }

// Output:
// { a: { x: 1, y: 3, z: 4 } }

// Approach Hint:
// Merge normal keys directly and handle nested object keys carefully.

function solve(input) {
    // TODO: write your logic here
    return deepMerge(input.first, input.second);

    function deepMerge(obj1, obj2) {
        const merged = { ...obj1 };

        for (const key in obj2) {
            if (Object.prototype.hasOwnProperty.call(obj2, key)) {
                if (typeof obj2[key] === 'object' && obj2[key] !== null && typeof merged[key] === 'object' && merged[key] !== null) {
                    merged[key] = deepMerge(merged[key], obj2[key]);
                } else {
                    merged[key] = obj2[key];
                }
            }
        }

        return merged;
    }
}

// Example Test Cases:
console.log(solve({
    first: { a: { x: 1, y: 2 } },
    second: { a: { y: 3, z: 4 } }
}));

