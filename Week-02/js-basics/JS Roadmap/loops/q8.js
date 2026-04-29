// Question:
// WAP that use the break statement to exit the loop when the counter reaches 5.
// Also, use continue to skip printing the value 3 (Note: Loop Starts from 0).

// Input:
// No input required.

// Output:
// [0, 1, 2, 4]

// Approach Hint:
// Use continue for 3 and break when the counter reaches 5.

function solve(input) {
    // TODO: write your logic here
    let result = [];
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            continue;
        }
        if (i === 5) {
            break;
        }
        result.push(i);
    }
    return result;
}

// Example Test Cases:
console.log(solve());

