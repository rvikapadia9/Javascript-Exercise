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
//Explanation: 
// 1234 -> 4321
// 1234 % 10 = 4
// 1234 / 10 = 123.4 -> Math.floor(123.4) = 123 
// 123 % 10 = 3
// 123 / 10 = 12.3 -> Math.floor(12.3) = 12
// 12 % 10 = 2
// 12 / 10 = 1.2 -> Math.floor(1.2) = 1
// 1 % 10 = 1
// 1 / 10 = 0.1 -> Math.floor(0.1) = 0
// 0 % 10 = 0
// 0 / 10 = 0

// 4321
// 4321 % 10 = 1
// 4321 / 10 = 432.1 -> Math.floor(432.1) = 432
// 432 % 10 = 2
// 432 / 10 = 43.2 -> Math.floor(43.2) = 43
// 43 % 10 = 3
// 43 / 10 = 4.3 -> Math.floor(4.3) = 4
// 4 % 10 = 4
// 4 / 10 = 0.4 -> Math.floor(0.4) = 0
// 0 % 10 = 0
// 0 / 10 = 0
