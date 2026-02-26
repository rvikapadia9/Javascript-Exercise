// Interview Gold (One-Liner Challenge)
// let nums = [1, 2, 3, 4, 5];

// Exercise:
// Write a single chained statement that:

// Doubles numbers

// Keeps numbers greater than 5

// Returns their sum

let nums = [1, 2, 3, 4, 5];

const sum = nums
  .map(n => n * 2) // Double numbers
  .filter(n => n > 5) // Keep numbers greater than 5
  .reduce((acc, n) => acc + n, 0); // Return their sum

console.log(sum); // 30
console.log("**********************************");
console.log(nums.map(n => n * 2));
console.log("**********************************");
console.log(nums.map(n => n * 2).filter(n => n > 5));
