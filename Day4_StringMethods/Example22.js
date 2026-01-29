// Replace Text

// Given:

// let text = "I like JavaScript";


// Replace "JavaScript" with "TypeScript"

// Replace all "a" with "@"

// Concepts:
// replace()
// replaceAll()
"use strict";

let text = "I like JavaScript";
let newText1 = text.replace("JavaScript", "TypeScript");
console.log("After replace():", newText1);      
let newText2 = text.replaceAll("a", "@");
console.log("After replaceAll():", newText2);
// Expected Output:
// After replace(): I like TypeScript
// After replaceAll(): I like J@v@Script
// Explanation:
// The replace() method replaces the first occurrence of a specified substring with a new substring.
// The replaceAll() method replaces all occurrences of a specified substring with a new substring.


