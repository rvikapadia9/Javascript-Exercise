// Convert to Strings
// let numbers = [10, 20, 30];

// Exercise:
// Use map() to convert all numbers into strings.

let numbers = [10, 20, 30];

let strings = numbers.map(function(number) {
    return String(number);
});

console.log(strings);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.
