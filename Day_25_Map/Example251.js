// Array of Objects Transformation
// let users = [
//   { id: 1, name: "Ravi" },
//   { id: 2, name: "Amit" }
// ];

// Exercise:
// Return a new array containing only user names.

let users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Amit" }
];

let userNames = users.map(function(user) {
    return user.name;
});

console.log(userNames);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.
