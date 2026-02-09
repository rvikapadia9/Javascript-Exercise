// Add & Delete Property

// Given:

// let employee = {
//   id: 101,
//   role: "QA"
// };


// Exercise:

// Add a new property department

// Delete the role property
let employee = {
    id: 101,
    role: "QA"
};
employee.department = "Engineering";
delete employee.role;
console.log(Object.keys(employee)); // Output: ["id", "department"]
console.log(Object.values(employee));
// Output: [101, "Engineering"]
console.log(Object.entries(employee));
// Output: [["id", 101], ["department", "Engineering"]]
    