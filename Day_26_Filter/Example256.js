// Filter Strings by Length
// let names = ["Ravi", "Amit", "Neha", "An"];

// Exercise:
// Return names with length ≥ 4.

let names = ["Ravi", "Amit", "Neha", "An"];

let filteredNames = names.filter(function(name) {
    return name.length >= 4;
});

console.log(filteredNames);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.