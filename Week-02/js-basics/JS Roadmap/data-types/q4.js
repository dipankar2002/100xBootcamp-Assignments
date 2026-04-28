// Question:
// WAP to calculate total marks in two subject and then calculate percentage.

// Input:
// { subject1: 80, subject2: 90, maxMarksPerSubject: 100 }

// Output:
// { totalMarks: 170, percentage: 85 }

// Approach Hint:
// Add both marks and divide by the maximum possible marks.

function solve(input) {
    // TODO: write your logic here
    return {
        totalMarks: input.subject1 + input.subject2,
        percentage: ((input.subject1 + input.subject2) / (2 * input.maxMarksPerSubject)) * 100
    };
}

// Example Test Cases:
console.log(solve({ subject1: 80, subject2: 90, maxMarksPerSubject: 100 }));

