// Random Number Generator

// Generate:

// A random number between 0 and 1

// A random number between 1 and 10

// Concept: Math.random()
let randomNum01 = Math.random();
console.log("A random number between 0 and 1 is:", randomNum01);

let randomNum10 = Math.floor(Math.random() * 10) + 1;
console.log("A random number between 1 and 10 is:", randomNum10);
// Explanation:
// This code snippet demonstrates the use of JavaScript's Math.random() method to generate random numbers. The first part generates a random floating-point number between 0 (inclusive) and 1 (exclusive). The second part generates a random integer between 1 and 10 (both inclusive) by scaling the random number and using Math.floor() to round it down to the nearest whole number.
    