// Table of a Number
// Goal: Print the multiplication table of 5 using while.

// Initialize the number for which we want the table.
let num = 5;

// Initialize the counter 'i' to 1. 
// Logic: Multiplication tables usually start from 1 (e.g., 5 x 1).
let i = 1;

// Start while loop. Condition: i <= 10
// Logic: We want to print the table up to 5 x 10, so loop runs until i is 10.
while (i <= 10) {
    // Print the table row
    // Logic: Calculates num * i and formats the output string "5 x 1 = 5"
    console.log(num + " x " + i + " = " + (num * i));
    
    // Increment 'i' to move to the next multiplier
    i++;
}
