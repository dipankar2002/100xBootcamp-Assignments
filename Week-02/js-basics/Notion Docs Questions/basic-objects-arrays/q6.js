// Question:
// Group people by city.
// Given an array of people objects, return an object where each city contains
// an array of names from that city.

// Input:
// [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ]

// Output:
// { Delhi: ["A", "C"], Mumbai: ["B"] }

// Approach Hint:
// Use the city as the key and push names into the matching array.

function solve(input) {
    // TODO: write your logic here
    return input.reduce((acc, person) => {
        const { name, city } = person;

        if (!acc[city]) {
            acc[city] = [];
        }

        acc[city].push(name);
        return acc;
    }, {});
}

// Example Test Cases:
console.log(solve([
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
]));

