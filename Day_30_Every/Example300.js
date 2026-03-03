// All API Calls Successful (QA)
// let statusCodes = [200, 200, 200];

// Exercise:
// Check if all API calls succeeded.

let statusCodes = [200, 200, 200];
let allSuccess = statusCodes.every(code => code === 200);
console.log(allSuccess);

//Explanation:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The every() method does not modify the original array.