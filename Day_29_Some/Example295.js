// Automation Scenario (Login Errors)
// let responses = [
//   { success: true },
//   { success: false }
// ];

// Exercise:
// Check if any request failed.

let responses = [
  { success: true },
  { success: false }
];

let isAnyFailed = responses.some(response => !response.success);

console.log(isAnyFailed);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.
