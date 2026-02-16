// Create a function that:

// Takes a number

// Returns "Even" or "Odd"

// Define a function named 'evenOrOdd' that takes one parameter: num
function evenOrOdd(num) {
    // Check if the number is divisible by 2 (remainder is 0)
    if (num % 2 === 0) {
        // If true, return "Number is Even"
        return "Number is Even";
    } else {
        // If false (remainder is not 0), return "Number is Odd"
        return "Number is Odd";
    }
}
// Call the 'evenOrOdd' function with argument 5 and log the result
console.log(evenOrOdd(5));

// Arrow Function Example
// Define 'evenOrOdd1' using a ternary operator to check for even/odd
const evenOrOdd1 = (num) => num % 2 === 0 ? "Even" : "Odd";
// Call the arrow function 'evenOrOdd1' and log the result
console.log(evenOrOdd1(5));
