// Iterate Array of Objects
// let users = [
//   { id: 1, role: "QA" },
//   { id: 2, role: "Dev" }
// ];

// Exercise:
// Print each user’s role.

let users = [
  { id: 1, role: "QA" },
  { id: 2, role: "Dev" }
];

users.forEach(function(user) {
    console.log(user.role);
});

//Explanation:
// The forEach() method executes a provided function once for each array element.
// The forEach() method does not return any value.
// The forEach() method does not modify the original array.
