// Sum of Numbers
// let nums = [1, 2, 3, 4];

// Exercise:
// Use reduce() to calculate the sum of all numbers.

let nums = [1, 2, 3, 4];

let sum = nums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.
