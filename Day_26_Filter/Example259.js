// Filter Duplicate Values (Logic)
// let arr = [1, 2, 2, 3, 4, 4];

// Exercise:
// Return an array without duplicates using filter().

let arr = [1, 2, 2, 3, 4, 4];

let uniqueArr = arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
});

console.log(uniqueArr);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.


// Example 2:
// return only Duplicate Values (Logic)
// let arr = [1, 2, 2, 3, 4, 4];

// Exercise:
// Return an array only duplicates using filter().

let arr2 = [1, 2, 2,5,5, 3, 4, 4];

let duplicateArr = arr2.filter(function(item, index) {
    return arr2.indexOf(item) !== index;
});

console.log(duplicateArr);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.