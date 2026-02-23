// Sum of Elements
// let prices = [100, 200, 300];

// Exercise:
// Calculate total price using forEach().

let prices = [100, 200, 300];
let total = 0;

prices.forEach(function(price) {
    total += price;
});

console.log(total);

//Explanation:
// The forEach() method executes a provided function once for each array element.
// The forEach() method does not return any value.
// The forEach() method does not modify the original array.