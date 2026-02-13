// Find First Multiple of 7
// Goal: Starting from 1, find the first number divisible by 7 using a while loop.

// Initialize 'num' to 1
// Logic: We start our search from 1.
let num = 12;

// Start an infinite while loop
// Logic: 'true' is always true, so this loop will run forever until we explicitly 'break' out of it.
while (true) {
    // Check if current 'num' is divisible by 7
    // Logic: If the remainder of num divided by 7 is 0, it is a multiple of 7.
    if (num % 7 === 0) {
        // Print the result if found
        console.log("First multiple of 7 is:", num);
        
        // Exit the loop immediately
        // Logic: 'break' statement terminates the loop execution. 
        // Without this, the loop would continue infinitely.
        break;
    }
    
    // Increment 'num' to check the next number
    // Logic: If the current number wasn't a multiple of 7, we try the next one.
    num++;
}
