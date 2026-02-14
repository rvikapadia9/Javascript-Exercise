// Reverse a Number
// let number = 1234;

// Reverse the number using do…while.

let number = 1234;
let reversed = 0;
let remainder;

do{
    remainder = number % 10;
    reversed = reversed * 10 + remainder;
    number = Math.floor(number / 10);
} while (number > 0);

console.log(reversed); 
