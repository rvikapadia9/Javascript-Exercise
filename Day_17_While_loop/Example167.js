// Reverse a Number
// Goal: Reverse the digits of a number using a while loop.

// Initialize the number to be reversed
let number = 1234;

// Initialize 'reversed' variable to 0
// Logic: This will store the reversed number as we build it digit by digit.
let reversed = 0;

// Start while loop. Condition: number > 0
// Logic: Process digits until the original number is reduced to 0.
while (number > 0) {
    // Get the last digit of the current number
    // Logic: 1234 % 10 = 4. This gives us the last digit.
    let digit = number % 10;
    
    // Append the digit to the reversed number
    // Logic: Multiply existing reversed number by 10 to shift digits to the left, 
    // then add the new digit.
    // Iteration 1: 0 * 10 + 4 = 4
    // Iteration 2: 4 * 10 + 3 = 43, etc.
    reversed = reversed * 10 + digit;
    
    // Remove the last digit from the original number
    // Logic: Integer division by 10 (using Math.floor). 1234 -> 123.
    number = Math.floor(number / 10);
}

// Print the final reversed number
console.log("Reversed number:", reversed);
