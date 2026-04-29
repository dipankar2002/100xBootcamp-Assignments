// Question:
// WAP that prints powers of 2 (2^n) up to 64.

// Input:
// No input required.

// Output:
// [2, 4, 8, 16, 32, 64]

// Approach Hint:
// Keep multiplying by 2 until the value reaches 64.

function solve(input) {
    // TODO: write your logic here
    return Array.from({ length: 6 }, (_, i) => 2 ** (i + 1));
}

// Example Test Cases:
console.log(solve());

