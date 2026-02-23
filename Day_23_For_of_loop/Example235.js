// Iterate Array of Objects
// let users = [
//   { id: 1, role: "QA" },
//   { id: 2, role: "Dev" }
// ];

// Exercise:
// Print all roles using for…of.

let users = [
  { id: 1, role: "QA" },
  { id: 2, role: "Dev" }
];
for(let user of users){
    console.log(user.role);
}
const usersentries = users.entries();
console.log(users);

//Explanation:
// The for...of loop is used to iterate over the elements of an array.
// The loop iterates over the elements of the array in order.
// The loop terminates when all elements of the array have been iterated over.
