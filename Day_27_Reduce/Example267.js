// Find Maximum Number
// let values = [10, 45, 7, 89, 23];

// Exercise:
// Use reduce() to find the largest number.

let values = [10, 45, 7, 89, 23];

let max = values.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(max);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.