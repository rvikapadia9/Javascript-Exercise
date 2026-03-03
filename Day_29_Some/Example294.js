// Any Price Above Limit
// let prices = [100, 200, 1500];

// Exercise:
// Check if any price is above 1000.

let prices = [100, 200, 1500];

let isAnyAboveLimit = prices.some(price => price > 1000);

console.log(isAnyAboveLimit);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The some() method does not modify the original array.