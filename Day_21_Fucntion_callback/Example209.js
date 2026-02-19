// Callback with Data

// Create a function processNumber that:

// Accepts a number and a callback

// Passes the number to the callback
let number = 10;
function processNumber(number, callback){
    callback(number);
}

function printNumber(number){
    console.log(number);
}

processNumber(number, printNumber);

//explanation 
// 1. processNumber function accepts a number and a callback function.
// 2. It calls the callback function with the number as an argument.
// 3. printNumber function is the callback function that prints the number.

