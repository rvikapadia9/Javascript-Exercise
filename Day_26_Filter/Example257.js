// Remove Falsy Values
// let data = [0, 1, false, true, "", "JS", null, undefined];

// Exercise:
// Filter out falsy values.

let data = [0, 1, false, true, "", "JS", null, undefined];

let filteredData = data.filter(function(item) {
    return item;
});

console.log(filteredData);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.