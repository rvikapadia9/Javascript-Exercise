// Index of Array
// let fruits = ["apple", "banana", "orange"];


// Exercises:

// Access the first element

// Access the last element

// Get the index of "banana"

// What happens if you access index 10?

let fruits = ["apple", "banana" , "orange"];
console.log(fruits[0]); // Output: "apple"
console.log(fruits[fruits.length-1]); // Output: "orange"
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits[10]); // Output: undefined   
//why?
// In JavaScript, if you try to access an index that is out of bounds (like index 10 in this case), it returns undefined instead of throwing an error. This is because arrays in JavaScript are dynamic and can grow or shrink as needed, but accessing an index that doesn't exist simply results in undefined.
