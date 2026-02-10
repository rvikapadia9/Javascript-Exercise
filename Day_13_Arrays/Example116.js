// Slice vs Splice (Interview Favorite)
// let arr = [10, 20, 30, 40, 50];


// Exercises:

// Extract [20, 30] without modifying array

// Remove [30, 40] from array

// Insert 25 at index 2

// Concepts:
// slice() vs splice()
let arr = [10, 20, 30, 40, 50];
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [20, 30]
console.log(arr); // Output: [10, 20, 30, 40, 50] (original array is unchanged)
arr.splice(2, 2);
console.log(arr);
// Output: [10, 20, 50] (30 and 40 are removed)
arr.splice(2, 0, 25);
console.log(arr); // Output: [10, 20, 25, 50] (25 is inserted at index 2)
//why?
// The slice() method creates a new array containing the specified portion of the original array without modifying it. In this case, we extract [20, 30] from the original array. The splice() method, on the other hand, modifies the original array by removing or adding elements. We first remove [30, 40] from the array using splice(), and then we insert 25 at index 2 without removing any elements by passing 0 as the second argument to splice().

        