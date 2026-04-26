// Question:
// Convert the object where languages are the top-level keys, and inside each
// are translation strings by key, into an object where translation keys are the
// top-level keys and inside each you store values per language. [HARD]

// Input:
// {
//   en: { hello: "Hello", bye: "Goodbye" },
//   fr: { hello: "Bonjour", bye: "Au revoir" },
//   es: { hello: "Hola" }
// }

// Output:
// {
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }

// Approach Hint:
// Loop through each language, then each translation key inside it.

function solve(input) {
    // TODO: write your logic here
}

// Example Test Cases:
console.log(solve({
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au revoir" },
    es: { hello: "Hola" }
}));

