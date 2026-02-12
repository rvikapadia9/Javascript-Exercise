// Reverse a Number

// Given:

// let number = 1234;


// Reverse the number using a while loop.
// Reverse a Number

let number = 1234;
let reversed = 0;

while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
}

console.log("Reversed number:", reversed);
