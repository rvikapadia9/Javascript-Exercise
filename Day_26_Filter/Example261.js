// Filter Even Numbers
// let nums = [1, 2, 3, 4, 5, 6];

// Exercise:
// Use filter() to return only even numbers.

let nums = [1, 2, 3, 4, 5, 6];

let evenNumbers = nums.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.
