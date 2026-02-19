// reduce() as HOF (Tricky)
// let prices = [100, 200, 300];


// Exercise:
// Use reduce() to return total price.

let prices = [100, 200, 300];

let total = prices.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);

console.log(total);

//explanation
// 1. reduce function accepts a callback function.
// 2. It iterates through the array and applies the callback function to each element.
// 3. It returns a new array with the callback function applied to each element.