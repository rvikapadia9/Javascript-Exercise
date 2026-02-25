// Multiply All Numbers
// let nums = [2, 3, 4];

// Exercise:
// Use reduce() to find the product of all numbers.

let nums = [2, 3, 4];

let product = nums.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log(product);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.
