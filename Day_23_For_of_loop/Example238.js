// example for in loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for(let value in person){
    console.log(value);
}
console.log("----------------");
for(let value in person){
    console.log(person[value]);
}

//Explanation:
// The for...in loop is used to iterate over the properties of an object.
// The loop iterates over the properties of the object in order.
// The loop terminates when all properties of the object have been iterated over.