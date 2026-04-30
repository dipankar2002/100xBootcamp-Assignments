// Question:
// Sum all transactions per user.
// Given an array of transaction objects, return an object where each user has
// the total amount of all their transactions.

// Input:
// [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ]

// Output:
// { A: 150, B: 200 }

// Approach Hint:
// Group by user and keep adding amounts.

function solve(input) {
    // TODO: write your logic here
    return input.reduce((acc, transaction) => {
        const { user, amount } = transaction;
        acc[user] = (acc[user] || 0) + amount;
        return acc;
    }, {});
}

// Example Test Cases:
console.log(solve([
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 }
]));

