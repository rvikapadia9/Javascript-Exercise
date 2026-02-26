// Shopping Cart Total (Real World)
// let cart = [
//   { item: "Pen", price: 20, qty: 2 },
//   { item: "Book", price: 100, qty: 3 },
//   { item: "Bag", price: 500, qty: 1 }
// ];

// Exercise:

// Calculate total price per item

// Keep items costing more than 100

// Calculate final bill amount

let cart = [
  { item: "Pen", price: 20, qty: 2 },
  { item: "Book", price: 100, qty: 3 },
  { item: "Bag", price: 500, qty: 1 }
];

const finalBillAmount = cart
  .map(item => item.price * item.qty) // Calculate total price per item
  .filter(totalPrice => totalPrice > 100) // Keep items costing more than 100
  .reduce((total, totalPrice) => total + totalPrice, 0); // Calculate final bill amount

console.log(finalBillAmount); // 1700
