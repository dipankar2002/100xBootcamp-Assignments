// Question:
// WAP to identify and log prime numbers within a given range.

// Input:
// { start: 1, end: 20 }

// Output:
// [2, 3, 5, 7, 11, 13, 17, 19]

// Approach Hint:
// Loop through the range and check each number for prime factors.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solve(input) {
    // TODO: write your logic here
    let primes = [];
    for (let i = input.start; i <= input.end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Example Test Cases:
console.log(solve({ start: 1, end: 20 }));

