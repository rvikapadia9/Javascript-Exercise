/*
Sum of Doubled Even Numbers
Exercise:
- Double all numbers
- Keep only even numbers
- Calculate the sum
- Chain: map → filter → reduce
*/

let nums = [1, 2, 3, 4, 5, 6];

const sum = nums
  .map(n => n * 2)             // Double all numbers
  .filter(n => n % 2 === 0)    // Keep only even numbers (all doubled values are even)
  .reduce((acc, n) => acc + n, 0); // Calculate the sum

console.log(sum); // 42