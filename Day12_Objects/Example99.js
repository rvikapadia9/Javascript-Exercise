//Complex example of objects
let person = {
    name: "Alice",
    age: 25,
    city: "Los Angeles",
    hobbies: ["reading", "traveling", "cooking"],
    address: {
        street: "123 Main St",
        zip: "90001"
    },
    greet: function() { 
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.hobbies[1]);
console.log(person.address.street);
person.greet(); // Output: Hello, my name is Alice
// Adding a new property
person.job = "Designer";
console.log(person.job);
// Modifying an existing property
person.age = 26;
console.log(person.age);
// Deleting a property
delete person.city;
console.log(person.city);
// Looping through object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 26  
// hobbies: reading,traveling,cooking
// address: [object Object]
// greet: function() { ... }
// job: Designer
        