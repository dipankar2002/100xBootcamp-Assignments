// Question:
// WAP to display the multiplication table (1 to 10) in the console.

// Input:
// { number: 5 }

// Output:
// Multiplication table from 1 to 10.

// Approach Hint:
// Use a loop from 1 to 10 and multiply by the given number.

function solve(input) {
    // TODO: write your logic here
    return `Multiplication table for ${input.number}:\n` +
        Array.from({ length: 10 }, (_, i) => `${input.number} x ${i + 1} = ${input.number * (i + 1)}`).join('\n');
}

// Example Test Cases:
console.log(solve({ number: 5 }));

