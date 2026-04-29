// Question:
// Write a function that validates an object against a provided schema. The
// schema should define the expected structure, data types, and optional/required
// fields.

// Input:
// object = { name: "John", age: 25, email: "john@example.com" }
// schema = { name: "string", age: "number", email: "string", address: "string?" }

// Output:
// true

// Approach Hint:
// Check required fields first, then compare each existing value's type.

function solve(input) {
    // TODO: write your logic here
    const { object, schema } = input;

    for (const key in schema) {
        const typeDefinition = schema[key];
        const isOptional = typeDefinition.endsWith("?");
        const expectedType = isOptional ? typeDefinition.slice(0, -1) : typeDefinition;
        const hasKey = Object.prototype.hasOwnProperty.call(object, key);

        if (!hasKey) {
            if (!isOptional) {
                return false;
            }
            continue;
        }

        if (typeof object[key] !== expectedType) {
            return false;
        }
    }

    return true;
}

// Example Test Cases:
console.log(solve({
    object: { name: "John", age: 25, email: "john@example.com" },
    schema: { name: "string", age: "number", email: "string", address: "string?" }
}));

