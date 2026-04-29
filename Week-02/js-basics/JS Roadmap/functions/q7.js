// Question:
// Write a function that has a local variable and another function that has a
// global variable. Demonstrate the difference between global and local scope.

// Input:
// No input required.

// Output:
// Demonstration of global and local scope.

// Approach Hint:
// Create one variable outside a function and one variable inside a function.

function solve(input) {
    // TODO: write your logic here
    globalThis.globalScopeValue = "global";
    const localScopeValue = "local";

    return `Global: ${globalThis.globalScopeValue}, Local: ${localScopeValue}`;
}

// Example Test Cases:
console.log(solve());

