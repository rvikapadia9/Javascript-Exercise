// Create a function that:

// Takes a number

// Returns its factorial

// Define a function named 'factorial' that takes a number
function factorial(num) {
    // Base case: if num is 0 or 1, the factorial is 1
    if (num === 0 || num === 1) {
        return 1;
    } else {
        // Recursive step: num multiplied by factorial of (num - 1)
        return num * factorial(num - 1);
    }
}
// Call the 'factorial' function with argument 5 and log the result
console.log(factorial(5));

// Arrow Function Example
// Define 'factorial1' using a ternary operator for the recursive logic
const factorial1 = (num) => num === 0 || num === 1 ? 1 : num * factorial1(num - 1);
// Call the arrow function 'factorial1' and log the result
console.log(factorial1(5));