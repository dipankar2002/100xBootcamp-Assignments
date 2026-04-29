// Question:
// Write a recursive function to calculate the factorial of a given number.

// Input:
// { number: 5 }

// Output:
// 120

// Approach Hint:
// Use a base case and call the function with a smaller number.

function solve(input) {
    // TODO: write your logic here
    function factorial(number) {
        if (number <= 1) {
            return 1;
        }

        return number * factorial(number - 1);
    }

    return factorial(input.number);
}

// Example Test Cases:
console.log(solve({ number: 5 }));

