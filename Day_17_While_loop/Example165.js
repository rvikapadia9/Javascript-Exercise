// Count Digits
// Goal: Count how many digits the number has using a while loop.

// Initialize the number to be processed
let number = 4587;

// Initialize 'count' to 0 to keep track of the number of digits found
let count = 0;

// Start while loop. Condition: number > 0
// Logic: As long as the number is greater than 0, it means there are still digits to count.
while (number > 0) {
    // Increment the digit counter
    // Logic: We found a digit (the last one), so we increase the count.
    count++;
    
    // Remove the last digit from the number
    // Logic: number / 10 gives a float (e.g., 458.7). 
    // Math.floor() rounds it down to the nearest integer (458).
    // This effectively removes the last digit '7'.
    // Next iteration: 458 -> 45 -> 4 -> 0. Loop stops when number is 0.
    number = Math.floor(number / 10);
}

// Print the total count of digits
console.log("Total digits:", count);
