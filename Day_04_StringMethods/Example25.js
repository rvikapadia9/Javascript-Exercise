// Split & Character Code

// Given:

// let data = "apple,banana,orange";


// Split it into an array

// Get the character code of 'h' from "hello"

// Concepts:
// split()
// charCodeAt()
"use strict";
let data = "apple,banana,orange";
let fruitsArray = data.split(",");
console.log("Fruits Array:", fruitsArray);
let greeting = "hello";
console.log("Character code of 'h':", greeting.charCodeAt(0));         
// Expected Output:
// Fruits Array: [ 'apple', 'banana', 'orange' ]
// Character code of 'h': 104
// Explanation:
// The split() method divides a string into an array of substrings based on a specified separator.
// The charCodeAt() method returns the Unicode of the character at a specified index in a string.
    