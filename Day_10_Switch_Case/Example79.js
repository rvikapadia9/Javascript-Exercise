// Calculator (Very Common)
// let num1 = 10;
// let num2 = 5;
// let operator = "*";


// Exercise:
// Perform operation based on operator:

// + Addition

// - Subtraction

// * Multiplication

// / Division

let num1 = 10;
let num2 = 5;
let operator = "*";
let result;
switch (operator) { 
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}
console.log(result);
    