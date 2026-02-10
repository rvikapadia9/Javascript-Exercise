// Reduce – Accumulate (Tricky)
// let cart = [100, 200, 300];


// Exercises:

// Calculate total price

// Find maximum value

// Concept:
// reduce() → returns single value
let cart = [100, 200, 300];
let totalPrice = cart.reduce((acc, price) => acc + price, 0);
console.log(totalPrice); // Output: 600
let maxPrice = cart.reduce((max, price) => price > max ? price : max, 0);
console.log(maxPrice); // Output: 300
//why?
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value. In the first case, we use reduce() to calculate the total price by summing all the elements in the cart array, starting with an initial value of 0. In the second case, we use reduce() to find the maximum value by comparing each price with the current maximum and returning the greater of the two.



