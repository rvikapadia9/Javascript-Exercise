// Count Even Numbers
// let numbers = [2, 5, 8, 11, 14];

// Exercise:
// Count how many even numbers are present.

let numbers = [2, 5, 8, 11, 14];
let evenCount = 0;

numbers.forEach(function(number) {
    if (number % 2 === 0) {
        evenCount++;
    }
});

console.log(evenCount);

//Explanation:
// The forEach() method executes a provided function once for each array element.
// The forEach() method does not return any value.
// The forEach() method does not modify the original array.