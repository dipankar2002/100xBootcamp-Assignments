// Question:
// WAP to calculate the sum of numbers from 1 to 5.

// Input:
// No input required.

// Output:
// 15

// Approach Hint:
// Keep a running sum inside the loop.

function solve(input) {
    // TODO: write your logic here
    return Array.from({ length: 5 }, (_, i) => i + 1).reduce((sum, num) => sum + num, 0);
}

// Example Test Cases:
console.log(solve());

