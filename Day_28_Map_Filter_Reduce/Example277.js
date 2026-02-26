// Count Passing Students
// let marks = [35, 60, 80, 45, 90];

// Exercise:

// Convert marks to boolean (pass / fail)

// Keep only passed students

// Count how many passed

let marks = [35, 60, 80, 45, 90];

const passingCount = marks
  .map(mark => mark >= 35) // Convert marks to boolean (pass / fail)
  .filter(isPass => isPass) // Keep only passed students
  .reduce((count, isPass) => count + (isPass ? 1 : 0), 0); // Count how many passed

console.log(passingCount); // 4