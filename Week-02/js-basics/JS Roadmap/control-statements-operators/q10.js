// Question:
// WAP to validate a username. If the username is less than 6 characters, log
// "Username too short"; if it's more than 15 characters, log "Username too long";
// otherwise, log "Username accepted."

// Input:
// { username: "rahul123" }

// Output:
// "Username accepted"

// Approach Hint:
// Check the username length with if-else conditions.

function solve(input) {
    // TODO: write your logic here
    const username = input.username;
    if (username.length < 6) {
        console.log("Username too short");
    } else if (username.length > 15) {
        console.log("Username too long");
    } else {
        console.log("Username accepted");
    }
}

// Example Test Cases:
console.log(solve({ username: "rahul123" }));

