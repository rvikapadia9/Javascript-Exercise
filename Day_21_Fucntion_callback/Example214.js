// map() as HOF
// let nums = [1, 2, 3, 4];


// Exercise:
// Use map() with a callback to return squares.

let nums = [1, 2, 3, 4];

let squares = nums.map(function(num){
    return num * num;
});

console.log(squares);

//explanation
// 1. map function accepts a callback function.
// 2. It iterates through the array and applies the callback function to each element.
// 3. It returns a new array with the callback function applied to each element.
