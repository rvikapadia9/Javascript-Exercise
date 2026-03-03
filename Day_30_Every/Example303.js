// All Numbers Valid (No NaN)
// let nums = [10, 20, 30];

// Exercise:
// Check if all values are valid numbers.

let nums = [10, 20, 30];
let allValid = nums.every(num => typeof num === "number" && !isNaN(num));
console.log(allValid);

//Explanation:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The every() method does not modify the original array.
