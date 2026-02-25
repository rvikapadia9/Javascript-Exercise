// Double Numbers
// let nums = [1, 2, 3, 4];

// Exercise:
// Use map() to return a new array with each number doubled.

let nums = [1, 2, 3, 4];

let doubled = nums.map(function(num) {
    return num * 2;
});

console.log(doubled);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.