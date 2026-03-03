// Any Failing Marks
// let marks = [70, 80, 35];

// Exercise:
// Check if any student failed (marks < 40).

let marks = [70, 80, 35];

let isAnyFailing = marks.some(mark => mark < 40);

console.log(isAnyFailing);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.