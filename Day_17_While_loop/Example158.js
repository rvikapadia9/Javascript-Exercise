// Initialize an array 'names' with 5 string elements
let names = ["Ravi", "Hardik", "Bhavesh", "Dev", "Kaval"];

// Initialize a counter variable 'num' to 0
// Logic: Array indices start at 0, so we start our counter at 0 to access the first element.
let num = 0;

// Start a while loop that runs as long as 'num' is less than the length of the 'names' array
// Logic: names.length is 5. The valid indices are 0, 1, 2, 3, 4. 
// The loop will run for num = 0, 1, 2, 3, 4. When num becomes 5, 5 < 5 is false, loop ends.
while (num < names.length) {
    // Print the current number (1-based index) and the name at the current index concatenated with " Procoder"
    // names[num] accesses the element at index 'num'
    console.log(num + 1, names[num] + " " + "Procoder");
    
    // Increment 'num' by 1 to move to the next index in the next iteration
    // Logic: Updating the counter is essential to progress through the array and terminate the loop.
    num++;
}
