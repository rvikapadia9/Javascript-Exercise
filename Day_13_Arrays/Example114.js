// Remove Elements from Array
// let cities = ["Delhi", "Mumbai", "Pune", "Chennai"];


// Exercises:

// Remove the last element

// Remove the first element

// Remove "Pune" using index

// Concepts:
// pop(), shift(), splice()
let cities = ["Delhi", "Mumbai", "Pune", "Chennai"];
cities.pop();
console.log(cities); // Output: ["Delhi", "Mumbai", "Pune"]
cities.shift();
console.log(cities); // Output: ["Mumbai", "Pune"]
cities.splice(1, 1);
console.log(cities); // Output: ["Delhi"]
//why?
// In JavaScript, the pop() method removes the last element from an array, the shift() method removes the first element, and the splice() method can be used to remove elements from a specific index. In this example, we first remove "Chennai" (the last element) using pop(), then remove "Delhi" (the first element) using shift(), and finally remove "Pune" (which is now at index 1) using splice(). The final output shows the updated array containing only "Delhi".
