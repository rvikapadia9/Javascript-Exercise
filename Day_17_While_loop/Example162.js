// Countdown
// Goal: Use a while loop to print numbers from 10 to 1.

// Initialize 'num' to 10
// Logic: We start the countdown from 10.
let num = 10;

// Start while loop. Condition: num >= 1
// Logic: The loop continues as long as num is greater than or equal to 1.
// It stops when num becomes 0.
while (num >= 1) {
    // Print the current value of 'num'
    console.log(num);
    
    // Decrement 'num' by 1
    // Logic: Since we are counting down, we decrease the value of num by 1 in each iteration.
    // num-- is equivalent to num = num - 1.
    num--;
}