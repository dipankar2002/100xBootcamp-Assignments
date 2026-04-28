// Question:
// Write a JavaScript program to perform arithmetic operations on two numbers
// (addition, subtraction, multiplication, division).

// Input:
// { firstNumber: 20, secondNumber: 4 }

// Output:
// { addition: 24, subtraction: 16, multiplication: 80, division: 5 }

// Approach Hint:
// Use arithmetic operators with both numbers.

function solve(input) {
    // TODO: write your logic here
    return {
        addition: input.firstNumber + input.secondNumber,
        subtraction: input.firstNumber - input.secondNumber,
        multiplication: input.firstNumber * input.secondNumber,
        division: input.firstNumber / input.secondNumber
    };
}

// Example Test Cases:
console.log(solve({ firstNumber: 20, secondNumber: 4 }));

