// Search-Like Filter
// let products = ["Laptop", "Phone", "Tablet", "Camera"];

// Exercise:
// Filter products that include the word "Phone".

let products = ["Laptop", "Phone", "Tablet", "Camera"];

let filteredProducts = products.filter(function(product) {
    return product.includes("Phone");
});

console.log(filteredProducts);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.