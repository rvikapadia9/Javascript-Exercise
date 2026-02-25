// Add Index to Value
// let values = [5, 5, 5];

// Exercise:
// Return a new array where each value is increased by its index

let values = [5, 5, 5];

let increased = values.map(function(value, index) {
    return (value+index) ;
});

console.log(increased);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.
