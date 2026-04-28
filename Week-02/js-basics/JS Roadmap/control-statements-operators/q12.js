// Question:
// Write a JavaScript program to demonstrate the use of assignment operators on
// variables.

// Input:
// { number: 10 }

// Output:
// Result after applying assignment operators.

// Approach Hint:
// Try operators like +=, -=, *=, and /= on a variable.

function solve(input) {
    // TODO: write your logic here
    let number = input.number;

    number += 5;
    number -= 3;
    number *= 2;
    number /= 4;

    return `Result after applying assignment operators: ${number}`;
}

// Example Test Cases:
console.log(solve({ number: 10 }));

