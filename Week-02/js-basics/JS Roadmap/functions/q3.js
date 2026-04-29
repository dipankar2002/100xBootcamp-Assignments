// Question:
// Write a function that takes the current hour as a parameter and logs a
// different greeting message based on whether it's morning, afternoon, or
// evening.

// Input:
// { hour: 15 }

// Output:
// "Good afternoon"

// Approach Hint:
// Use hour ranges to choose the greeting.

function solve(input) {
    // TODO: write your logic here
    if (input.hour < 12) {
        return "Good morning";
    } else if (input.hour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

// Example Test Cases:
console.log(solve({ hour: 15 }));

