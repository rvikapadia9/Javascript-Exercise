// Initialize variable 'a' with value 10
let a = 10;

// Print a message indicating the start of the program
console.log("Program Started");

// Start a while loop that continues as long as 'a' is less than 16
// Logic: The loop checks the condition (a < 16) before each iteration.
while (a < 16) {
    // Print "less than 16" to the console
    console.log("less than 16");
    
    // Increment the value of 'a' by 1
    // Logic: This is crucial to avoid an infinite loop. 
    // If 'a' is not updated, the condition (a < 16) will always be true.
    a = a + 1; // important: update the value to eventually terminate the loop
}

// Print a message indicating the end of the program
// This line executes only after the while loop has finished (when 'a' becomes 16 or more)
console.log("program ended");