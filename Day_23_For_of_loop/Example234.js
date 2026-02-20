// Iterate Nested Array
// let matrix = [
//   [1, 2],
//   [3, 4]
// ];

// Exercise:
// Print all numbers using nested for…of.

let matrix = [
  [1, 2],
  [3, 4]
];
for(let row of matrix){
    for(let num of row){
        console.log(num);
    }
}

//Explanation:
// The for...of loop is used to iterate over the elements of an array.
// The loop iterates over the elements of the array in order.
// The loop terminates when all elements of the array have been iterated over.
