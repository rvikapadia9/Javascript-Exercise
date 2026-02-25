// Uppercase Names
// let names = ["ravi", "amit", "neha"];

// Exercise:
// Convert all names to uppercase using map()

let names = ["ravi", "amit", "neha"];

let uppercaseNames = names.map(function(name) {
    return name.toUpperCase();
});

console.log(uppercaseNames);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.