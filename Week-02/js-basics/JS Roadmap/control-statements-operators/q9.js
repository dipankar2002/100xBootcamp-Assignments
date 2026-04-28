// Question:
// WAP that classifies a number as positive, negative, even, or odd.

// Input:
// { number: 8 }

// Output:
// Classification of the number.

// Approach Hint:
// Check sign first, then check even or odd using remainder.

function solve(input) {
    // TODO: write your logic here
    const num = input.number;
    let classification = '';
    
    if (num > 0) {
        classification += 'positive ';
    } else if (num < 0) {
        classification += 'negative ';
    } else {
        classification += 'zero ';
    }
}

// Example Test Cases:
console.log(solve({ number: 8 }));

