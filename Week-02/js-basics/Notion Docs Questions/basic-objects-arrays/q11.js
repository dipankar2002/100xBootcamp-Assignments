// Question:
// Find student with highest average marks.
// Given an object where each key is a student and each value is an array of
// marks, return the student with the highest average.

// Input:
// { A: [80, 90], B: [70, 75, 85] }

// Output:
// "A"

// Approach Hint:
// Compare the average marks for each student.

function solve(input) {
    // TODO: write your logic here
    return Object.keys(input).reduce((topStudent, student) => {
        const average = input[student].reduce((sum, mark) => sum + mark, 0) / input[student].length;
        const topAverage = input[topStudent].reduce((sum, mark) => sum + mark, 0) / input[topStudent].length;

        return average > topAverage ? student : topStudent;
    });
}

// Example Test Cases:
console.log(solve({ A: [80, 90], B: [70, 75, 85] }));

