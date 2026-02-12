// Sum of Numbers
// Goal: Calculate the sum of numbers from 1 to 100 using a while loop.

// Initialize 'num' to 1. This is our counter variable.
let num = 1;

// Initialize 'sum' to 0. This variable will hold the running total.
// Logic: It must start at 0 so that the first addition is correct (0 + 1 = 1).
let sum = 0;

// Start while loop. Condition: num <= 100
// Logic: Loop runs for numbers 1 through 100 inclusive.
while (num <= 100) {
    // Add the current 'num' to the 'sum'
    // Logic: On the first iteration: sum = 0 + 1 => 1
    // On the second iteration: sum = 1 + 2 => 3, and so on.
    sum = sum + num;
    
    // Increment 'num' to process the next number
    num++;
}

// Print the final calculated sum
// Logic: This executes after the loop finishes, printing the total sum of 1 to 100.
console.log("Sum is:", sum);
