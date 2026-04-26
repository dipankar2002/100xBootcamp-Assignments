// Question:
// Check for permissions from roles.
// Given a roles object, a role to check, and an action, return whether that
// role has permission for the action.

// Input:
// roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] }
// checkRole = "user"
// action = "write"

// Output:
// false

// Approach Hint:
// Find the role's permission list and check if the action exists in it.

function solve(input) {
    // TODO: write your logic here
}

// Example Test Cases:
console.log(solve({
    roles: { admin: ["read", "write"], user: ["read"], staff: ["write"] },
    checkRole: "user",
    action: "write"
}));

