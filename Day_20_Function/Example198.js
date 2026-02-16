// Count Vowels

// Create a function that:

// Takes a string

// Returns the number of vowels

// Define a function named 'countVowels' that takes a string
function countVowels(str) {
    // Initialize a counter to 0
    let count = 0;
    // Loop through each character of the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel (lower case check)
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            // If it is a vowel, increment the count
            count++;
        }
    }
    // Return the total count of vowels
    return count;
}
// Call the 'countVowels' function with string "javascript" and log the result
console.log(countVowels("javascript"));

// Arrow Function Example
// Define 'countVowels1' as an arrow function doing the same logic
const countVowels1 = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    return count;
};
// Call the arrow function 'countVowels1' with string "hello" and log the result
console.log(countVowels1("hello"));
