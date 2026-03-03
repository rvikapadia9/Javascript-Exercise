// Shopping Cart Validation
// let cart = [
//   { inStock: true },
//   { inStock: false }
// ];

// Exercise:

// Check if any item is out of stock

// Check if all items are in stock

let cart = [
  { inStock: true },
  { inStock: false }
];

// Check if any item is out of stock
let anyOutOfStock = cart.some(item => !item.inStock);
console.log("Any item is out of stock:", anyOutOfStock);

// Check if all items are in stock
let allInStock = cart.every(item => item.inStock);
console.log("All items are in stock:", allInStock);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The some() method does not modify the original array.
// The every() method does not modify the original array.
