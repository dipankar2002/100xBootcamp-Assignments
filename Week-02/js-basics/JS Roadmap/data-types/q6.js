// Question:
// WAP to input n numbers and log the average of those number.

// Input:
// [10, 20, 30, 40]

// Output:
// 25

// Approach Hint:
// Add all numbers and divide by the count of numbers.

function solve(input) {
    // TODO: write your logic here
    let sum = 0;
    for(let x of input) 
        sum += x;
    return sum / input.length;
}

// Example Test Cases:
console.log(solve([10, 20, 30, 40]));

