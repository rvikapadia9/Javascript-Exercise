// Mixed Validation
// let marks = [60, 70, 30];

// Exercise:

// Check if any student failed

// Check if all students passed

let marks = [60, 70, 30];

// Check if any student failed
let anyFailed = marks.some(mark => mark < 60);
console.log("Any student failed:", anyFailed);

// Check if all students passed
let allPassed = marks.every(mark => mark >= 60);
console.log("All students passed:", allPassed);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The some() method does not modify the original array.
// The every() method does not modify the original array.
