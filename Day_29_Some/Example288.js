// Any Empty String
// let inputs = ["abc", "", "test"];

// Exercise:
// Check if any value is empty.

let inputs = ["abc", "", "test"];

let isAnyEmpty = inputs.some(input => input === "");

console.log(isAnyEmpty);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.