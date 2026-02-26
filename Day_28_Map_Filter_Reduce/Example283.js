// Remove Duplicates & Sum
// let nums = [1, 2, 2, 3, 4, 4, 5];

// Exercise:

// Remove duplicates

// Square each number

// Find total sum

let nums = [1, 2, 2, 3, 4, 4, 5];

const sum = [...new Set(nums)]
  .map(n => n * n)
  .reduce((acc, n) => acc + n, 0);

console.log(sum); // 55

console.log([...new Set(nums)]);
console.log([...new Set(nums)].map(n => n * n));
