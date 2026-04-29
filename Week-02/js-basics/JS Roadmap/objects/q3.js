// Question:
// Create a function that transforms an object by renaming its keys based on a
// provided mapping. The function should handle nested objects.

// Input:
// object = { firstName: "John", address: { city: "New York" } }
// mapping = { firstName: "name", address: { city: "location.city" } }

// Output:
// { name: "John", location: { city: "New York" } }

// Approach Hint:
// Read the mapping and place values into their new key paths.

function solve(input) {
    // TODO: write your logic here
    const { object, mapping } = input;
    const result = {};

    function setByPath(target, path, value) {
        const keys = path.split(".");
        let current = target;

        for (let index = 0; index < keys.length - 1; index += 1) {
            const key = keys[index];
            if (!(key in current) || typeof current[key] !== "object" || current[key] === null) {
                current[key] = {};
            }
            current = current[key];
        }

        current[keys[keys.length - 1]] = value;
    }

    function walk(source, map, path = "") {
        for (const key in map) {
            const value = map[key];
            const currentValue = source[key];

            if (typeof value === "string") {
                setByPath(result, value, currentValue);
            } else if (value && typeof value === "object") {
                walk(currentValue, value, path ? `${path}.${key}` : key);
            }
        }
    }

    walk(object, mapping);
    return result;
}

// Example Test Cases:
console.log(solve({
    object: { firstName: "John", address: { city: "New York" } },
    mapping: { firstName: "name", address: { city: "location.city" } }
}));

