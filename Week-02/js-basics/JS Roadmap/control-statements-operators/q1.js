// Question:
// WAP that checks if a variable x is greater than 10. If it is, log
// "x is greater than 10," otherwise, log "x is not greater than 10."

// Input:
// { x: 12 }

// Output:
// "x is greater than 10"

// Approach Hint:
// Use an if-else condition.

function solve(input) {
    // TODO: write your logic here
    if (input.x > 10) {
        return "x is greater than 10";
    }
    return "x is not greater than 10";
}

// Example Test Cases:
console.log(solve({ x: 12 }));

