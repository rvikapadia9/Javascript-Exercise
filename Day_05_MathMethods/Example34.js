
// let num = 4.6;
// Round down
// Round to nearest
// Round up

// Concepts:
// Math.floor()
// Math.round()
// Math.ceil()
let num = 4.6;
let roundDown = Math.floor(num);
console.log("The value of", num, "rounded down is:", roundDown);       
let roundNearest = Math.round(num);
console.log("The value of", num, "rounded to the nearest integer is:", roundNearest);
let roundUp = Math.ceil(num);
console.log("The value of", num, "rounded up is:", roundUp);
// Explanation: This code snippet demonstrates the use of JavaScript's Math methods to round a given number in different ways. It uses Math.floor() to round down to the nearest integer, Math.round() to round to the nearest integer based on standard rounding rules, and Math.ceil() to round up to the nearest integer. The results are printed to the console.
