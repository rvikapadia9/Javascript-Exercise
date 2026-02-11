// Find vs FindIndex
// let employees = [
//   { id: 1, role: "QA" },
//   { id: 2, role: "Dev" }
// ];


// Exercises:

// Find employee with role "QA"

// Get index of "Dev"

// Concepts:
// find() vs findIndex()
let employees = [
  { id: 1, role: "QA" },
  { id: 2, role: "Dev" }
];
const qaEmployee = employees.find(employee => employee.role === "QA");
console.log(qaEmployee);
const devIndex = employees.findIndex(employee => employee.role === "Dev");
console.log(devIndex);  
//why?
// The find() method returns the first element in the array that satisfies the provided testing function, which in this case is the employee with the role "QA". The findIndex() method returns the index of the first element that satisfies the testing function, which is the index of the employee with the role "Dev". In this example, we find the employee object for "QA" and get the index for "Dev", demonstrating how these two methods work differently to retrieve information from an array.

        