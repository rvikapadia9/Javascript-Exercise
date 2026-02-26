// Extract & Sum Object Values (Interview Favorite)
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 }
// ];

// Exercise:

// Extract prices

// Keep prices greater than 1000

// Find total cost

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];

const totalCost = products
  .map(product => product.price) // Extract prices
  .filter(price => price > 1000) // Keep prices greater than 1000
  .reduce((total, price) => total + price, 0); // Find total cost

console.log(totalCost); // 56500

console.log(products.map(product => product.price).filter(price => price > 1000));
