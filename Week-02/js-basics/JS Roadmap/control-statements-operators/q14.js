// Question:
// Write a JavaScript program to demonstrate logical operators in a conditional
// statement.

// Input:
// { age: 20, hasLicense: true }

// Output:
// Result based on logical condition.

// Approach Hint:
// Use logical operators like &&, ||, or ! inside a condition.

function solve(input) {
    // TODO: write your logic here
    const { age, hasLicense } = input;

    if (age >= 18 && hasLicense) {
        return "You are eligible to drive.";
    } else if (age >= 18 && !hasLicense) {
        return "You need a license to drive.";
    } else {
        return "You are not eligible to drive.";
    }
}

// Example Test Cases:
console.log(solve({ age: 20, hasLicense: true }));

