// Question:
// WAP to categorize a given temperature into "low," "medium," or "high" ranges.

// Input:
// { temperature: 35 }

// Output:
// "high"

// Approach Hint:
// Choose temperature ranges and use conditions.

function solve(input) {
    // TODO: write your logic here
    if (!input || typeof input.temperature === 'undefined') return;
    const t = Number(input.temperature);
    if (Number.isNaN(t)) return "Invalid temperature";

    if (t < 20) return "low";
    if (t <= 30) return "medium";
    return "high";
}

// Example Test Cases:
console.log(solve({ temperature: 35 }));

