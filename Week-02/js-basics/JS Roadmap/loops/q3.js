// Question:
// WAP that counts backward from 10 to 1 and logs the values.

// Input:
// No input required.

// Output:
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Approach Hint:
// Use a loop that decreases the counter.

function solve(input) {
    // TODO: write your logic here
    return Array.from({ length: 10 }, (_, i) => 10 - i);
}

// Example Test Cases:
console.log(solve());

