// Question:
// Implement a switch case statement to determine the type of fruit based on a
// variable. Handle at least three different fruit options.

// Input:
// { fruit: "apple" }

// Output:
// Fruit type or message based on the selected fruit.

// Approach Hint:
// Use switch-case with at least three fruit cases and a default case.

function solve(input) {
    // TODO: write your logic here
    let fruitType;
    switch (input.fruit) {
        case "apple":
            fruitType = "This is an apple.";
            break;
        case "banana":
            fruitType = "This is a banana.";
            break;
        case "orange":
            fruitType = "This is an orange.";
            break;
        default:
            fruitType = "Unknown fruit type.";
    }
    return fruitType;
}

// Example Test Cases:
console.log(solve({ fruit: "apple" }));

