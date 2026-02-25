// Square of Numbers
// let nums = [2, 4, 6];

// Exercise:
// Return an array of squares.

let numbers = [1, 2, 3, 4];

const square = numbers.map(function(number) {
    return number * number;
});

console.log(square);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.