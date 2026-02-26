// Salary Processing
// let salaries = [20000, 30000, 50000, 80000];

// Exercise:

// Add 10% bonus

// Keep salaries above 40000

// Calculate total payout

let salaries = [20000, 30000, 50000, 80000];

const totalPayout = salaries
  .map(salary => salary * 1.10) // Add 10% bonus
  .filter(salary => salary > 40000) // Keep salaries above 40000
  .reduce((total, salary) => total + salary, 0); // Calculate total payout

console.log(totalPayout); // 187000
