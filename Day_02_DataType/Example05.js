// Identify null and undefined
let a;        // undefined
let b = null; // null

console.log(a, "=>", typeof a); // undefined => "undefined"
console.log(b, "=>", typeof b); // null => "object" (JavaScript bug)