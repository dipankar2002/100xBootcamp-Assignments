// Question:
// Write a JavaScript program to compare two numbers and log whether they are
// equal, greater, or lesser.

// Input:
// { firstNumber: 10, secondNumber: 20 }

// Output:
// "firstNumber is lesser"

// Approach Hint:
// Use comparison operators and if-else conditions.

function solve(input) {
    // TODO: write your logic here
    if (input.firstNumber === input.secondNumber) {
        return "Numbers are equal";
    } else if (input.firstNumber > input.secondNumber) {
        return "firstNumber is greater";
    } else {
        return "firstNumber is lesser";
    }
}

// Example Test Cases:
console.log(solve({ firstNumber: 10, secondNumber: 20 }));

