// Count Total Characters
// let words = ["js", "html", "css"];

// Exercise:
// Use reduce() to count total characters.

let words = ["js", "html", "css"];

let totalCharacters = words.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.length;
}, 0);

console.log(totalCharacters);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.