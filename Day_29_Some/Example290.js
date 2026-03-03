// Any Admin User
// let users = [
//   { role: "QA" },
//   { role: "Admin" }
// ];

// Exercise:
// Check if any user is Admin.

let users = [
  { role: "QA" },
  { role: "Admin" }
];

let isAnyAdmin = users.some(user => user.role === "Admin");

console.log(isAnyAdmin);
//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.
