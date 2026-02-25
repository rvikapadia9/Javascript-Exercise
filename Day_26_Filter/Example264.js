// filter() vs find() (Interview Gold)
// let nums = [10, 20, 30, 40];

// Exercise:
// Use filter() to get numbers greater than 25 and explain:

// Why filter() returns an array

// When find() would be a better choice

let nums = [10, 20, 30, 40];

let filteredNums = nums.filter(function(num) {
    return num > 25;
});

console.log(filteredNums);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.
// find() would be a better choice here because it returns the first element that passes the test implemented by the provided function.


// Example 2:
// let nums = [10, 20, 30, 40];

// Exercise:
// Use find() to get numbers greater than 25 and explain:

// Why find() returns an array

// When find() would be a better choice

let nums2 = [10, 20, 30, 40];

let foundNum = nums2.find(function(num) {
    return num > 25;
});

console.log(foundNum);

//Explanation:
// The find() method creates a new array with all elements that pass the test implemented by the provided function.
// The find() method does not modify the original array.
// find() would be a better choice here because it returns the first element that passes the test implemented by the provided function.
