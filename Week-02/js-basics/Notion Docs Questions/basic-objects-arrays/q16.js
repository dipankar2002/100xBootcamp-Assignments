// Question:
// Count even and odd numbers in array.
// Given an array of numbers, return an object with counts of even and odd
// numbers.

// Input:
// [1, 2, 3, 4, 5, 6]

// Output:
// { even: 3, odd: 3 }

// Approach Hint:
// Use the remainder operator to check whether each number is even or odd.

function solve(input) {
    // TODO: write your logic here
    return input.reduce((counts, number) => {
        if (number % 2 === 0) {
            counts.even += 1;
        } else {
            counts.odd += 1;
        }
        return counts;
    }, { even: 0, odd: 0 });
}

// Example Test Cases:
console.log(solve([1, 2, 3, 4, 5, 6]));

