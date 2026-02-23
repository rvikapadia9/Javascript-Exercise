// Compare forEach() vs map() (Interview Favorite)
// let nums = [1, 2, 3];

// Exercise:
// Use forEach() to double values and explain why no array is returned.

let nums = [1, 2, 3];

nums.forEach(function(num) {
    console.log(num * 2);
});

//Explanation:
// The forEach() method executes a provided function once for each array element.
// The forEach() method does not return any value.
// The forEach() method does not modify the original array.

// map() method
let nums2 = [1, 2, 3];

let doubled = nums2.map(function(num) {
    return num * 2;
});

console.log(doubled);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.
