// Print Numbers
// Goal: Use a while loop to print numbers from 1 to 10.

// Initialize variable 'num' with 1
// Logic: We want to start printing from 1.
let num = 1;

// Start while loop. Condition: num <= 10
// Logic: The loop will continue executing as long as 'num' is less than or equal to 10.
// Once 'num' becomes 11, the condition (11 <= 10) is false, and the loop stops.
while (num <= 10) {
    // Print the current value of 'num'
    console.log("number is ", num);
    
    // Increment 'num' by 1
    // Logic: Increases the value of 'num' so that it eventually reaches 11 and breaks the loop.
    num++;
}

// Code after the loop
console.log("Program Ended");