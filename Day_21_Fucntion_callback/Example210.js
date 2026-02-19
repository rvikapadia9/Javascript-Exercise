// Add Using Callback

// Create a function calculate that:

// Takes two numbers and a callback

// Returns the result from the callback

// Example callbacks:

// add

// subtract

function calculate(num1, num2, callback){
    return callback(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, subtract));
