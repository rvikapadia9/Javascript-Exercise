// Modify Original Array (Tricky)
// let scores = [40, 60, 80];

// Exercise:
// Increase each score by 10 using forEach().

let scores = [40, 60, 80];

scores.forEach(function(score,index) {
    scores[index] = score + 10;
});

console.log(scores);

//Explanation:
// The forEach() method executes a provided function once for each array element.
// The forEach() method does not return any value.
// The forEach() method does not modify the original array.