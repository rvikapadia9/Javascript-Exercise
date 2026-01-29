// Padding a String

// Given:

// let orderId = "45";


// Pad it at the start to make length 5 using 0

// Pad it at the end to make length 5 using X

// Concepts:
// padStart()
// padEnd()
"use strict";
let orderId = "45";
console.log("Original Order ID:", orderId);
console.log("Padded at start:", orderId.padStart(5, '0'));
console.log("Padded at end:", orderId.padEnd(5, 'X'));
// Expected Output:
// Original Order ID: 45
// Padded at start: 00045
// Padded at end: 45XXX
// Explanation:
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.
// The padEnd() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end (right) of the current string.

    