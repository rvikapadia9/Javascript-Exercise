// Key–Value Pairs in Array (Objects Inside Array)
// let users = [
//   { id: 1, name: "Ravi" },
//   { id: 2, name: "Amit" }
// ];


// Exercises:

// Print all user names

// Find user with id = 2

// Add a new user

// Concepts:
// Arrays of objects (very common in APIs)
let users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Amit" }
];
users.forEach(user => console.log(user.name)); // Output: "Ravi" "Amit"
const user = users.find(user => user.id === 2);
console.log(user); // Output: { id: 2, name: "Amit" }   
users.push({ id: 3, name: "Sita" });
console.log(users); // Output: [{ id: 1, name: "Ravi" }, { id: 2, name: "Amit" }, { id: 3, name: "Sita" }]
//why?
// In this example, we have an array of objects representing users. We use the forEach() method to print the names of all users. To find a user with a specific id, we use the find() method, which returns the first element that satisfies the provided testing function. Finally, we add a new user to the array using the push() method, which adds the new object to the end of the array. The final output shows the updated array with all users, including the newly added one.

    