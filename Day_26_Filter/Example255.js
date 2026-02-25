// Filter Numbers Greater Than 50
// let scores = [35, 60, 80, 45, 90];

// Exercise:
// Return scores greater than 50.

let scores = [35, 60, 80, 45, 90];

let filteredScores = scores.filter(function(score) {
    return score > 50;
});

console.log(filteredScores);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.