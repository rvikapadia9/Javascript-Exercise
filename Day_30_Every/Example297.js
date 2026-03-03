// All Strings Non-Empty
// let inputs = ["a", "b", "c"];

// Exercise:
// Check if all strings are non-empty.
let inputs = ["a", "b", "c"];
let allNonEmpty = inputs.every(input => input.length !== 0);
console.log(allNonEmpty);