// Question:
// Write a function that takes a number as a parameter and returns true if it's a
// prime number and false otherwise.

// Input:
// { number: 7 }

// Output:
// true

// Approach Hint:
// Check whether the number has any divisor other than 1 and itself.

function solve(input) {
    // TODO: write your logic here
    const number = input.number;

    if (number < 2) {
        return false;
    }

    for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

// Example Test Cases:
console.log(solve({ number: 7 }));

