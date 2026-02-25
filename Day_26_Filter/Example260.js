// Filter Array of Objects
// let users = [
//   { id: 1, role: "QA" },
//   { id: 2, role: "Dev" },
//   { id: 3, role: "QA" }
// ];

// Exercise:
// Return only users with role "QA".

let users = [
  { id: 1, role: "QA" },
  { id: 2, role: "Dev" },
  { id: 3, role: "QA" }
];

let qaUsers = users.filter(function(user) {
    return user.role === "QA";
});

console.log(qaUsers);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.
