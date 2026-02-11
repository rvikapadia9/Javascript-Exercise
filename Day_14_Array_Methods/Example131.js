// splice() – Remove & Insert
// let arr = ["a", "b", "c", "d"];


// Exercise:

// Remove "b" and "c"

// Insert "x" and "y" at the same position
let arr = ["a", "b", "c", "d"];

// Remove "b" and "c", then insert "x" and "y"
arr.splice(1, 2, "x", "y");

console.log(arr); // ["a", "x", "y", "d"]