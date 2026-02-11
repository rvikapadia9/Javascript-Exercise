// Nested Object Inside 2D Array
// let users = [
//   [{ id: 1, name: "Ravi" }],
//   [{ id: 2, name: "Amit" }]
// ];


// Exercise:

// Print "Amit"

// Update name of first user

let users = [
  [{ id: 1, name: "Ravi" }],
  [{ id: 2, name: "Amit" }]
];

// Print "Amit"
console.log(users[1][0].name);

// Update name of first user
users[0][0].name = "Rahul";

console.log(users);
