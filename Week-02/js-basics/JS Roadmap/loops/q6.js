// Question:
// WAP to Develop a do-while loop for a simple number guessing game. Ask the
// user to guess a number between 1 and 10, and keep prompting until they guess
// correctly.

// Input:
// { correctNumber: 7, guesses: [3, 5, 7] }

// Output:
// Number of guesses or messages until the correct guess.

// Approach Hint:
// Use a do-while loop and stop when the guess matches the correct number.

function solve(input) {
    // TODO: write your logic here
    const { correctNumber, guesses } = input;
    let guessIndex = 0;
    let message = '';
    
    do {
        const currentGuess = guesses[guessIndex];
        if (currentGuess === correctNumber) {
            message = `Correct! It took you ${guessIndex + 1} guesses.`;
            break;
        } else {
            message = `Wrong guess: ${currentGuess}. Try again!`;
        }
        guessIndex++;
    } while (guessIndex < guesses.length);
    
    return message;
}

// Example Test Cases:
console.log(solve({ correctNumber: 7, guesses: [3, 5, 7] }));

