// Question:
// Write a function that returns another function. The inner function should have
// access to a variable from the outer function.

// Input:
// { outerValue: "Hello" }

// Output:
// Result from the inner function using the outer variable.

// Approach Hint:
// Use a closure where the inner function remembers the outer value.

function solve(input) {
    // TODO: write your logic here
    const outerValue = input.outerValue;

    function innerFunction() {
        return `Inner function says: ${outerValue}`;
    }

    return innerFunction();
}

// Example Test Cases:
console.log(solve({ outerValue: "Hello" }));

