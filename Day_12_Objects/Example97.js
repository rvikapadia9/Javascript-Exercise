// Objects example
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
// Adding a new property
person.job = "Developer";
console.log(person.job); // Output: Developer
// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31
// Deleting a property
delete person.city;
console.log(person.city); // Output: undefined
// Looping through object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}   
// Output:
// name: John
// age: 31
// job: Developer

console.log(Object.keys(person)); // Output: ["name", "age", "job"]
console.log(Object.values(person)); // Output: ["John", 31, "Developer"]
console.log(Object.entries(person)); // Output: [["name", "John"], ["age", 31], ["job", "Developer"]]   






