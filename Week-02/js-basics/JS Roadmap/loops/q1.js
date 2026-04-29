// Question:
// WAP that logs numbers from 1 to 10 to the console.

// Input:
// No input required.

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Approach Hint:
// Use a loop that starts at 1 and ends at 10.

function solve(input) {
    // TODO: write your logic here
    return Array.from({ length: 10 }, (_, i) => i + 1);
}

// Example Test Cases:
console.log(solve());

