// Question:
// WAP to assign grade for a student For example, if the score is between 90 and
// 100, assign the grade "A.", (take score of every subject as input).

// Input:
// { marks: [95, 90, 92] }

// Output:
// "A"

// Approach Hint:
// Calculate the score or percentage, then use conditions for grade ranges.

function solve(input) {
    // TODO: write your logic here
    const totalMarks = input.marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = totalMarks / input.marks.length;

    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
    return "Grade not assigned";
}

// Example Test Cases:
console.log(solve({ marks: [95, 90, 92] }));

