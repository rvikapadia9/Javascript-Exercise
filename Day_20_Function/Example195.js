// Create a function that:

// Takes two numbers

// Returns the larger number
// Define a function named 'larger' that takes two parameters: a and b
function larger(a, b) {
    // Check if 'a' is greater than 'b'
    if (a > b) {
        // If true, return 'a'
        return a;
    } else {
        // If false, return 'b'
        return b;
    }
}
// Call the 'larger' function with arguments 5 and 10 and log the result
console.log(larger(5, 10));

// Arrow Function Example
// Define 'larger1' using a ternary operator to find the larger of two numbers
const larger1 = (a, b) => a > b ? a : b;
// Call the arrow function 'larger1' and log the result
console.log(larger1(5, 10));

// Create a function that:
// Takes 5 numbers
// Returns the larger number
// Define a function named 'larger5' that takes five parameters
function larger5(a, b, c, d, e) {
    // Check if 'a' is greater than all other numbers
    if (a > b && a > c && a > d && a > e) {
        return a;
    }
    // Check if 'b' is greater than all other numbers
    else if (b > a && b > c && b > d && b > e) {
        return b;
    }
    // Check if 'c' is greater than all other numbers
    else if (c > a && c > b && c > d && c > e) {
        return c;
    }
    // Check if 'd' is greater than all other numbers
    else if (d > a && d > b && d > c && d > e) {
        return d;
    }
    // If none of the above, 'e' must be the largest (or equal largest)
    else {
        return e;
    }
}
// Call the 'larger5' function with 5 arguments and log the result
console.log(larger5(5, 10, 15, 20, 25));

// Arrow Function Example
// Define 'larger51' using nested ternary operators to find the largest of 5 numbers
const larger51 = (a, b, c, d, e) => a > b && a > c && a > d && a > e ? a : b > a && b > c && b > d && b > e ? b : c > a && c > b && c > d && c > e ? c : d > a && d > b && d > c && d > e ? d : e;
// Call the arrow function 'larger51' and log the result
console.log(larger51(5, 10, 15, 20, 25));