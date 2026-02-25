// Price Calculation (Real Scenario)
// let prices = [100, 200, 300];

// Exercise:
// Return final prices after adding 18% GST.

let prices = [100, 200, 300];

let finalPrices = prices.map(function(price) {
    return price + (price * 0.18);
});

console.log(finalPrices);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.