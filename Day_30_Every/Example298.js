// All Students Passed
// let marks = [60, 70, 80];

// Exercise:
// Check if all students passed.

let marks = [60, 70, 80, 90, 90.5, 59.5];
let allPassed = marks.every(mark => mark >= 60);
console.log(allPassed);

//Explanation:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The every() method does not modify the original array.
