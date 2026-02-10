// Loose vs Strict Comparison
// let a = 10;
// let b = "10";


// Exercise:
// Check and print:

// result using ==

// result using ===

// Operators: ==, ===
let a = 10;
let b = "10";
if (a == b) {
    console.log("Using == : a is equal to b");
}
else {
    console.log("Using == : a is not equal to b");
}
if (a === b) {
    console.log("Using === : a is strictly equal to b");
}
else {
    console.log("Using === : a is not strictly equal to b");
}
// Explanation: This code compares two variables, a and b, using both loose equality (==) and strict equality (===) operators. The loose equality operator checks for value equality after type coercion, while the strict equality operator checks for both value and type equality. The results of both comparisons are printed to the console.