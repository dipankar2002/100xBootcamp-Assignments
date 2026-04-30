// Question:
// Chunk object entries into groups of size.
// Given an object and a chunk size, return object entries split into groups of
// that size.

// Input:
// object = { a: 1, b: 2, c: 3, d: 4 }
// size = 2

// Output:
// [[["a", 1], ["b", 2]], [["c", 3], ["d", 4]]]

// Approach Hint:
// Convert the object into entries, then take entries in fixed-size groups.

function solve(input) {
    // TODO: write your logic here
    return Object.entries(input.object).reduce((chunks, entry, index) => {
        if (index % input.size === 0) {
            chunks.push([]);
        }
        chunks[chunks.length - 1].push(entry);
        return chunks;
    }, []);
}

// Example Test Cases:
console.log(solve({
    object: { a: 1, b: 2, c: 3, d: 4 },
    size: 2
}));

