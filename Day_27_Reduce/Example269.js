// Sum of Even Numbers
// let nums = [1, 2, 3, 4, 5, 6];

// Exercise:
// Use reduce() to sum only even numbers.
let nums = [1, 2, 3, 4, 5, 6];

let sumOfEvenNumbers = nums.reduce(function(accumulator, currentValue) {
    if (currentValue % 2 === 0) {
        return accumulator + currentValue;
    }
    return accumulator;
}, 0);

console.log(sumOfEvenNumbers);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.