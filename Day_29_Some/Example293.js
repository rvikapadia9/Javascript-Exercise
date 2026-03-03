// Any Duplicate Number
// let nums = [1, 2, 3, 2];

// Exercise:
// Check if any number appears more than once.

let nums = [1, 2, 3, 2];

let isAnyDuplicate = nums.some((num, index) => nums.indexOf(num) !== index);

console.log(isAnyDuplicate);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.
