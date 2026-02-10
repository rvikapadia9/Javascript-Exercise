// Given:

// let message = "hello";


// Print the first character

// Print the last character

// Print the length of the string

// Concepts:
// message[0], message.length
"use strict";
let message = "hello";
console.log("First character:", message[0]);
console.log("Last character:", message[message.length - 1]);
//or
console.log("Last character:", message[4]);
console.log("Length of the string:", message.length);         
// Expected Output:
// First character: h
// Last character: o
// Length of the string: 5
// Explanation:
// In JavaScript, strings are zero-indexed, meaning the first character is at index 0.
// The last character can be accessed using the length of the string minus one.
// The length property of a string returns the total number of characters in that string.