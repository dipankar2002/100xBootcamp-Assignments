// Question:
// WAP to input the temperature in Fahrenheit and convert this temperature in
// Centigrade.

// Input:
// { fahrenheit: 98.6 }

// Output:
// 37

// Approach Hint:
// Use the Fahrenheit to Celsius conversion formula.

function solve(input) {
    // TODO: write your logic here
    return Math.round((input.fahrenheit - 32) * 5 / 9);
}

// Example Test Cases:
console.log(solve({ fahrenheit: 98.6 }));

