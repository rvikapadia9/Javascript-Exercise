// filter() as HOF
// let scores = [35, 70, 90, 45];


// Exercise:
// Use filter() to return passing scores (≥ 50).

let scores = [35, 70, 90, 45];

let passingScores = scores.filter(function(score){
    return score >= 50;
});

console.log(passingScores);

//explanation
// 1. filter function accepts a callback function.
// 2. It iterates through the array and applies the callback function to each element.
// 3. It returns a new array with the callback function applied to each element.
