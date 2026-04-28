// Question:
// Write a JavaScript program to perform bitwise operations on two numbers.

// Input:
// { firstNumber: 5, secondNumber: 3 }

// Output:
// Result of bitwise operations.

// Approach Hint:
// Try operators like &, |, ^, <<, and >>.

function solve(input) {
    // TODO: write your logic here
    const { firstNumber, secondNumber } = input;

    const bitwiseAnd = firstNumber & secondNumber;
    const bitwiseOr = firstNumber | secondNumber;
    const bitwiseXor = firstNumber ^ secondNumber;
    const leftShiftFirst = firstNumber << 1;
    const rightShiftFirst = firstNumber >> 1;

    return {
        bitwiseAnd,
        bitwiseOr,
        bitwiseXor,
        leftShiftFirst,
        rightShiftFirst
    };
}

// Example Test Cases:
console.log(solve({ firstNumber: 5, secondNumber: 3 }));

