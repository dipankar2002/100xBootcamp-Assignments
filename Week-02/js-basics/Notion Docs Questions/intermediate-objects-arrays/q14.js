// Question:
// Find most repeated word across categories.
// Given an object where each key has an array of words, return the word that
// appears the most across all arrays.

// Input:
// { fruits: ["apple", "apple", "banana"], drinks: ["apple", "tea"] }

// Output:
// "apple"

// Approach Hint:
// Count all words across every category, then find the highest count.

function solve(input) {
    // TODO: write your logic here
    return Object.values(input)
        .flat()
        .reduce((countMap, word) => {
            countMap[word] = (countMap[word] || 0) + 1;
            return countMap;
        }, {});
}

// Example Test Cases:
console.log(solve({ fruits: ["apple", "apple", "banana"], drinks: ["apple", "tea"] }));

