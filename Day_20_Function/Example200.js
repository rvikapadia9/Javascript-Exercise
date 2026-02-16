// Array Sum

// Create a function that:

// Takes an array of numbers

// Returns the total sum
// Define a function named 'arraySum' that takes an array of numbers
function arraySum(arr) {
    // Initialize sum to 0
    let sum = 0;
    // Iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        // Add current element to sum
        sum += arr[i];
    }
    // Return the total sum
    return sum;
}
// Call the 'arraySum' function and log the result
console.log(arraySum([1, 2, 3, 4, 5]));

// Arrow Function Example
// Define 'arraySum1' using the 'reduce' method to calculate the sum
const arraySum1 = (arr) => arr.reduce((a, b) => a + b);
// Call the arrow function 'arraySum1' and log the result
console.log(arraySum1([1, 2, 3, 4, 5]));


// Create a function that:
// Takes an array of numbers
// Returns the largest number
// Define a function named 'largest' that takes an array
function largest(arr) {
    // Assume the first element is the largest initially
    let largest = arr[0];
    // Iterate from the second element to the end
    for (let i = 1; i < arr.length; i++) {
        // Check if current element is greater than 'largest'
        if (arr[i] > largest) {
            // Update 'largest' with the current element
            largest = arr[i];
        }
    }
    // Return the largest found number
    return largest;
}
// Call the 'largest' function and log the result
console.log(largest([1, 2, 3, 4, 5]));

// Arrow Function Example
// Define 'largest1' using 'reduce' with a ternary operator to find the max
const largest1 = (arr) => arr.reduce((a, b) => a > b ? a : b);
// Call the arrow function 'largest1' and log the result
console.log(largest1([1, 2, 3, 4, 5]));