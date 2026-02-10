// Update Object Property

// Given:

// let product = {
//   name: "Laptop",
//   price: 50000
// };


// Exercise:
// Update the price to 48000 and print the object.
let product = {
    name: "Laptop",
    price: 50000
};
product.price = 48000;

console.log(Object.keys(product)); // Output: ["name", "price"]
console.log(Object.values(product));    
// Output: ["Laptop", 48000]    
console.log(Object.entries(product));    
// Output: [["name", "Laptop"], ["price", 48000]]


