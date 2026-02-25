// Filter Positive Numbers
// let numbers = [-10, 20, -5, 30, 0];

// Exercise:
// Return only positive numbers.

let numbers = [-10, 20, -5, 30, 0];

let positiveNumbers = numbers.filter(function(number) {
    return number > 0;
});

console.log(positiveNumbers);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.