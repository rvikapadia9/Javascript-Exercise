// All Names Uppercase
// let names = ["RAVI", "AMIT"];

// Exercise:
// Check if all names are uppercase.

let names = ["RAVI", "AMIT"];
let allUppercase = names.every(name => name === name.toUpperCase());
console.log(allUppercase);

//Explanation:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The every() method does not modify the original array.
