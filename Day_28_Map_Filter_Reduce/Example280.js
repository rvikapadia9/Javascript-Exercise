// String Length Aggregation
// let words = ["js", "javascript", "api", "automation"];

// Exercise:

// Get length of each word

// Keep lengths greater than 3

// Find total characters

let words = ["js", "javascript", "api", "automation"];

const totalCharacters = words
  .map(word => word.length) // Get length of each word
  .filter(length => length > 3) // Keep lengths greater than 3
  .reduce((total, length) => total + length, 0); // Find total characters

console.log(totalCharacters); // 18