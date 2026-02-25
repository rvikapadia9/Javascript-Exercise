// Count Occurrences
// let fruits = ["apple", "banana", "apple", "orange"];

// Exercise:
// Use reduce() to count how many times each fruit appears.

let fruits = ["apple", "banana", "apple", "orange"];

let fruitCounts = fruits.reduce(function(accumulator, currentValue) {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 0;
    }
    accumulator[currentValue]++;
    return accumulator;
}, {});

console.log(fruitCounts);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.