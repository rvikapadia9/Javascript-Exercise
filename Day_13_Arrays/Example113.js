// Add Elements to Array
// let numbers = [1, 2, 3];


// Exercises:

// Add 4 at the end

// Add 0 at the beginning

// Add multiple values at once

// Concepts:
// push(), unshift()
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4]
numbers.push(5, 6, 7);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6, 7]
//why?
// In JavaScript, the push() method adds one or more elements to the end of an array, while the unshift() method adds one or more elements to the beginning of an array. In this example, we first add 4 to the end of the numbers array using push(), then add 0 to the beginning using unshift(), and finally add multiple values (5, 6, and 7) to the end using push() again. The final output shows the updated array with all the added elements.

