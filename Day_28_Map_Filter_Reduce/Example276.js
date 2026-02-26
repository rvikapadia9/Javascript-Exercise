/*
Total Price After Discount
Exercise:

Add 18% GST

// Keep prices greater than 250

// Find total payable amount */


let prices = [100, 200, 300, 400];

const totalPayableAmount = prices
  .map(price => price * 1.18)  // Add 18% GST
  .filter(price => price > 250) // Keep prices greater than 250
  .reduce((total, price) => total + price, 0); // Calculate total payable amount

console.log(totalPayableAmount); // 888
