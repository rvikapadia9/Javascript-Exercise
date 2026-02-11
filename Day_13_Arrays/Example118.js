// Filter – Select Data
// let scores = [35, 67, 80, 45, 90];


// Exercises:

// Get scores greater than 60

// Get failing scores (< 40)

// Concept:
// filter() → conditional selection
let scores = [35, 67, 80, 45, 90];
let passingScores = scores.filter(score => score > 60);
console.log(passingScores); // Output: [67, 80, 90]
let failingScores = scores.filter(score => score < 40);
console.log(failingScores); // Output: [35]
//why?
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this example, we use filter() to select scores greater than 60 for passing scores and scores less than 40 for failing scores. The resulting arrays contain only the scores that meet the specified conditions.

            