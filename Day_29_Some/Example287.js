// Any Negative Value
// let values = [10, -5, 20];

// Exercise:
// Check if array contains any negative number.

let values = [10, -5, 20];

let isAnyNegative = values.some(value => value < 0);

console.log(isAnyNegative);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.