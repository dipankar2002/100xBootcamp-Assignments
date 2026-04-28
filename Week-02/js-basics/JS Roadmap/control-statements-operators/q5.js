// Question:
// WAP using Switch-case to display day name according to number, for eg:
// 1 => Sunday. (take a number as input).

// Input:
// { dayNumber: 1 }

// Output:
// "Sunday"

// Approach Hint:
// Use switch-case with one case for each day number.

function solve(input) {
    // TODO: write your logic here
    let dayName;
    switch (input.dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}

// Example Test Cases:
console.log(solve({ dayNumber: 1 }));

