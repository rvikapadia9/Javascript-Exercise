// Print Even Numbers
// Goal: Print all even numbers between 1 and 20 using a while loop.

// Initialize 'num' to 1
// Logic: We start checking from the number 1.
let num = 1;

// Start while loop. Condition: num <= 20
// Logic: loop will execute as long as num is less than or equal to 20
while (num <= 20) {
    // Check if the current number is even
    // Logic: The modulo operator (%) returns the remainder of division.
    // If num % 2 === 0, it means num is divisible by 2 with no remainder, so it is even.
    if (num % 2 === 0) {
        // If the condition is true, print the number
        console.log("Even number is: " + num);
    }
    
    // Increment 'num' by 1 to check the next number
    // Logic: We must increment inside the loop, but outside the if block, 
    // to ensure we check every number from 1 to 20.
    num++;
}
