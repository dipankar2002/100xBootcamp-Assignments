// Question:
// WAP to check time of day based on the current hour. For example, if it's
// before noon, log "Good morning.". (take time as an input).

// Input:
// { hour: 9 }

// Output:
// "Good morning"

// Approach Hint:
// Use hour ranges to decide the greeting.

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
console.log(solve({ hour: 9 }));

