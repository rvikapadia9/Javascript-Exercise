// Any Status Not 200 (QA)
// let statusCodes = [200, 200, 500];

// Exercise:
// Check if any API call failed.

let statusCodes = [200, 200, 500];

let isAnyFailed = statusCodes.some(code => code !== 200);

console.log(isAnyFailed);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.
