// Question:
// Reconcile two lists (missing and extra items).
// Given an expected list and an actual list, return missing items from expected
// and extra items from actual.

// Input:
// expected = ["a", "b", "c"]
// actual = ["b", "c", "d"]

// Output:
// { missing: ["a"], extra: ["d"] }

// Approach Hint:
// Compare both arrays in both directions.

function solve(input) {
    // TODO: write your logic here
    return {
        missing: input.expected.filter(item => !input.actual.includes(item)),
        extra: input.actual.filter(item => !input.expected.includes(item))
    };
}

// Example Test Cases:
console.log(solve({
    expected: ["a", "b", "c"],
    actual: ["b", "c", "d"]
}));

