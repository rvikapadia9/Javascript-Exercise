// Remove Duplicates
// let arr = [1, 2, 2, 3, 4, 4];

// Exercise:
// Use reduce() to return an array without duplicates.

let arr = [1, 2, 2, 3, 4, 4];

let uniqueArray = arr.reduce(function(accumulator, currentValue) {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueArray);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.