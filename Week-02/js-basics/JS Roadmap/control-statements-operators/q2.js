// Question:
// WAP that check that if an user is illegible for drive a car or not (take user
// age as input).

// Input:
// { age: 18 }

// Output:
// "Eligible to drive"

// Approach Hint:
// Compare the user's age with the minimum driving age.

function solve(input) {
    // TODO: write your logic here
    if (input.age >= 18) {
        return "Eligible to drive";
    }
    return "Not eligible to drive";
}

// Example Test Cases:
console.log(solve({ age: 18 }));

