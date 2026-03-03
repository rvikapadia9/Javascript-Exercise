// API Health Check (QA Favorite)
// let responses = [
//   { status: 200 },
//   { status: 200 },
//   { status: 500 }
// ];

// Exercise:

// Check if any request failed

// Check if all requests succeeded

let responses = [
  { status: 200 },
  { status: 200 },
  { status: 500 }
];

// Check if any request failed
let anyFailed = responses.some(response => response.status !== 200);
console.log("Any request failed:", anyFailed);

// Check if all requests succeeded
let allSuccess = responses.every(response => response.status === 200);
console.log("All requests succeeded:", allSuccess);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The some() method does not modify the original array.
// The every() method does not modify the original array.
