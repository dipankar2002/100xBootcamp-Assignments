// Question:
// Write a JavaScript program to use the in operator to check if a property
// exists in an object.

// Input:
// { object: { name: "Rahul", age: 23 }, property: "age" }

// Output:
// true

// Approach Hint:
// Use the in operator with the property name and object.

function solve(input) {
    // TODO: write your logic here
    const { object, property } = input;
    return property in object;
}

// Example Test Cases:
console.log(solve({ object: { name: "Rahul", age: 23 }, property: "age" }));

