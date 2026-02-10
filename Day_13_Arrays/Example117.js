// Map – Transform Array
// let prices = [100, 200, 300];


// Exercises:

// Increase each price by 10%

// Convert numbers to strings

// Concept:
// map() → returns new array
let prices = [100, 200, 300];
let increasedPrices = prices.map(price => price * 1.10);
console.log(increasedPrices); // Output: [110, 220, 330]
let stringPrices = prices.map(price => price.toString());
console.log(stringPrices); // Output: ["100", "200", "300"]
//why?
// The map() method creates a new array by applying a provided function to each element of the original array. In the first case, we multiply each price by 1.10 to increase it by 10%, resulting in a new array of increased prices. In the second case, we convert each number to a string using the toString() method, resulting in an array of string representations of the original numbers.
            