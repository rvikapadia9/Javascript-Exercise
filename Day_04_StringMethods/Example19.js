// Given:

// let text = "   JavaScript is fun   ";


// Remove spaces from both sides

// Remove spaces only from start

// Remove spaces only from end

// Concepts:
// trim()
// trimStart()
// trimEnd()
"use strict";
let text = "   JavaScript is fun   ";
console.log("Original String with spaces:", '"' + text + '"');
console.log("After trim():", '"' + text.trim() + '"');
console.log("After trimStart():", '"' + text.trimStart() + '"');
console.log("After trimEnd():", '"' + text.trimEnd() + '"');    
// Expected Output:
// Original String with spaces: "   JavaScript is fun   "
// After trim(): "JavaScript is fun"
// After trimStart(): "JavaScript is fun   "
// After trimEnd(): "   JavaScript is fun"
// Explanation:
// The trim() method removes whitespace from both ends of a string.
// The trimStart() method removes whitespace only from the beginning of a string.
// The trimEnd() method removes whitespace only from the end of a string.

        