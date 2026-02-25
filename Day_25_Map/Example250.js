// Boolean Mapping
// let marks = [35, 60, 80, 45];

// Exercise:
// Return true for marks ≥ 50, otherwise false.

let marks = [35, 60, 80, 45];

let passFail = marks.map(function(mark) {
    return mark >= 50;
});

console.log(passFail);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.
// return marks which are greater than 50
