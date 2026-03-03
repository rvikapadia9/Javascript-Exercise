// Any Long String
// let names = ["Ravi", "Amitabh"];

// Exercise:
// Check if any name has length > 5.

let names = ["Ravi", "Amitabh"];

let isAnyLong = names.some(name => name.length > 5);

console.log(isAnyLong);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.