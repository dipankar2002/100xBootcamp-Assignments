// Question:
// WAP to input the distance between two cities (in km), convert and print this
// distance in meter, feet, inches, and centimeter.

// Input:
// { kilometers: 2 }

// Output:
// { meters: 2000, feet: 6561.68, inches: 78740.16, centimeters: 200000 }

// Approach Hint:
// Convert kilometers into each requested unit.

function solve(input) {
    // TODO: write your logic here
    return {
        meters: input.kilometers * 1000,
        feet: input.kilometers * 3280.84,
        inches: input.kilometers * 39370.1,
        centimeters: input.kilometers * 100000
    };
}

// Example Test Cases:
console.log(solve({ kilometers: 2 }));

