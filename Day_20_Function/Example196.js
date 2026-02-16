// Create a function that:

// Takes obtained marks and total marks

// Returns the percentage
// Define a function named 'percentage' that takes obtained marks and total marks
function percentage(obtainedMarks, totalMarks) {
    // Calculate percentage: (obtained / total) * 100
    return (obtainedMarks / totalMarks) * 100;
}
// Call the 'percentage' function and log the result
console.log(percentage(80, 100));

// Arrow Function Example
// Define 'percentage1' as an arrow function for the same calculation
const percentage1 = (obtainedMarks, totalMarks) => (obtainedMarks / totalMarks) * 100;
// Call the arrow function 'percentage1' and log the result
console.log(percentage1(80, 100));

// Create a function that:
// Takes marks of 5 subjects
// Returns the average/percentage (assuming each is out of 100)
// Define a function named 'percentage5' taking marks for 5 subjects
function percentage5(a, b, c, d, e) {
    // Calculate average: Sum of marks divided by 5
    return (a + b + c + d + e) / 5;
}
// Call the 'percentage5' function and log the result
console.log(percentage5(80, 90, 100, 70, 60));

// Arrow Function Example
// Define 'percentage51' as an arrow function for the same calculation
const percentage51 = (a, b, c, d, e) => (a + b + c + d + e) / 5;
// Call the arrow function 'percentage51' and log the result
console.log(percentage51(80, 90, 100, 70, 60));