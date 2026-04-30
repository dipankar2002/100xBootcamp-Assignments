// Question:
// Find student with highest average mark.
// Given an object where each key is a student and each value is an array of
// marks, return the student with the highest average.

// Input:
// { A: [80, 90], B: [70, 75, 85] }

// Output:
// "A"

// Approach Hint:
// Calculate each student's average and compare them.

function solve(input) {
    // TODO: write your logic here
    return Object.keys(input).reduce((highest, student) => {
        const average = input[student].reduce((sum, mark) => sum + mark, 0) / input[student].length;
        const highestAverage = input[highest].reduce((sum, mark) => sum + mark, 0) / input[highest].length;

        return average > highestAverage ? student : highest;
    });
}

// Example Test Cases:
console.log(solve({ A: [80, 90], B: [70, 75, 85] }));

