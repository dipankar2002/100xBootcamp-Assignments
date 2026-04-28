// Question:
// WAP to input the length and breath of rectangle and calculate the area and
// parimeter of rectangle.

// Input:
// { length: 10, breadth: 5 }

// Output:
// { area: 50, perimeter: 30 }

// Approach Hint:
// Use rectangle formulas for area and perimeter.

function solve(input) {
    // TODO: write your logic here
    return {
        area: input.length * input.breadth,
        perimeter: 2 * (input.length + input.breadth)
    };
}

// Example Test Cases:
console.log(solve({ length: 10, breadth: 5 }));

